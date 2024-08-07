from fastapi import FastAPI, Request
from fastapi.responses import StreamingResponse, JSONResponse
from fastapi.middleware.cors import CORSMiddleware
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
import seaborn as sns
import io
from io import BytesIO 
import pandas as pd
import numpy as np

from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_absolute_error, mean_squared_error, r2_score, explained_variance_score
from sklearn.linear_model import LinearRegression
from sklearn.preprocessing import LabelEncoder
import os

app = FastAPI()

imm_df = None
linear_reg = None
le_quarter = LabelEncoder()
le_month = LabelEncoder()
le_province = LabelEncoder()
le_division = LabelEncoder()
le_subdivision = LabelEncoder()

# Allow requests from all origins
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Directory where plots are saved
PLOT_DIR = 'plots'

# Ensure plot directory exists
os.makedirs(PLOT_DIR, exist_ok=True)

# Load data
def load_data():
    global imm_df
    imm_df = pd.read_csv('./data/immigration_data.csv')
    return imm_df

# Describe 'Total' column
def describe_total():
    imm_df = load_data()
    return imm_df['Total'].describe().to_dict()

# Group by year and sum totals
def yearly_totals():
    imm_df = load_data()
    return imm_df.groupby('EN_YEAR')['Total'].sum().to_dict()

# Group by province/territory and sum totals
def province_totals():
    imm_df = load_data()
    return imm_df.groupby('EN_PROVINCE_TERRITORY')['Total'].sum().to_dict()

# Encode categorical columns
def encode_categorical():
    imm_df = load_data()
    categorical_cols = imm_df.select_dtypes(include=['object']).columns.tolist()
    encoded_mappings = {}
    for col in categorical_cols:
        imm_df[col + '_encoded'] = LabelEncoder().fit_transform(imm_df[col])
        encoded_mappings[col] = dict(zip(imm_df[col].unique(), imm_df[col + '_encoded'].unique()))
    return imm_df.drop(columns=categorical_cols), encoded_mappings

# Train linear regression model and return evaluation metrics
def train_linear_regression():
    global linear_reg
    encoded_df, _ = encode_categorical()
    X = encoded_df.drop('Total', axis=1)
    y = encoded_df['Total']
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
    linear_reg = LinearRegression()
    linear_reg.fit(X_train, y_train)
    y_pred = linear_reg.predict(X_test)
    mae = mean_absolute_error(y_test, y_pred)
    mse = mean_squared_error(y_test, y_pred)
    rmse = np.sqrt(mse)
    r2 = r2_score(y_test, y_pred)
    explained_var = explained_variance_score(y_test, y_pred)
    return {
        "MAE": mae,
        "MSE": mse,
        "RMSE": rmse,
        "R2": r2,
        "Explained Variance": explained_var
    }

# Additional analysis function
def additional_analysis():
    imm_df = load_data()
    
    # Trends over the years
    yearly_totals = imm_df.groupby('EN_YEAR')['Total'].sum().to_dict()

    # Total number of immigrants per province/territory
    province_totals = imm_df.groupby('EN_PROVINCE_TERRITORY')['Total'].sum().to_dict()

    # Distribution of immigration by year
    plt.figure(figsize=(10, 6))
    sns.countplot(data=imm_df, x='EN_YEAR', palette='viridis')
    plt.title('Number of Immigration Records by Year')
    plot_path_yearly = os.path.join(PLOT_DIR, 'yearly_immigration_count.png')
    plt.savefig(plot_path_yearly)
    plt.close()

    # Total immigrants by province/territory
    plt.figure(figsize=(12, 6))
    province_totals_plot = imm_df.groupby('EN_PROVINCE_TERRITORY')['Total'].sum().reset_index()
    sns.barplot(data=province_totals_plot, x='EN_PROVINCE_TERRITORY', y='Total', palette='viridis')
    plt.title('Total Immigrants by Province/Territory')
    plt.xticks(rotation=45)
    plt.tight_layout()
    plot_path_province = os.path.join(PLOT_DIR, 'province_totals.png')
    plt.savefig(plot_path_province)
    plt.close()

    return {
        "yearly_totals": yearly_totals,
        "province_totals": province_totals,
        "plot_path_yearly": plot_path_yearly,
        "plot_path_province": plot_path_province
    }

def encode_input(user_input, le_quarter, le_month, le_province, le_division, le_subdivision):
    encoded_input = user_input.copy()
    encoded_input['EN_QUARTER_encoded'] = le_quarter.transform([user_input['EN_QUARTER']])[0]
    encoded_input['EN_MONTH_encoded'] = le_month.transform([user_input['EN_MONTH']])[0]
    encoded_input['EN_PROVINCE_TERRITORY_encoded'] = le_province.transform([user_input['EN_PROVINCE_TERRITORY']])[0]
    encoded_input['EN_CENSUS_DIVISION_encoded'] = le_division.transform([user_input['EN_CENSUS_DIVISION']])[0]
    encoded_input['EN_CENSUS_SUBDIVISION_encoded'] = le_subdivision.transform([user_input['EN_CENSUS_SUBDIVISION']])[0]

    for col in ['EN_QUARTER', 'EN_MONTH', 'EN_PROVINCE_TERRITORY', 'EN_CENSUS_DIVISION', 'EN_CENSUS_SUBDIVISION']:
        encoded_input.pop(col)

    return encoded_input


def fit_label_encoders():
    global le_quarter, le_month, le_province, le_division, le_subdivision
    # Load the complete dataset
    df = pd.read_csv('./data/immigration_data.csv')
    le_quarter = LabelEncoder().fit(df['EN_QUARTER'].astype(str).str.lower())
    le_month = LabelEncoder().fit(df['EN_MONTH'].astype(str).str.lower())
    le_province = LabelEncoder().fit(df['EN_PROVINCE_TERRITORY'].astype(str).str.lower())
    le_division = LabelEncoder().fit(df['EN_CENSUS_DIVISION'].astype(str).str.lower())
    le_subdivision = LabelEncoder().fit(df['EN_CENSUS_SUBDIVISION'].astype(str).str.lower())



# FastAPI endpoints

@app.on_event("startup")
async def startup_event():
    fit_label_encoders()
    train_linear_regression()

@app.get("/")
def read_root():
    return {"message": "Hello, this is the Python server :)"}

@app.get("/load-data")
def get_data():
    data = load_data()
    return JSONResponse(content=data.to_dict(orient='records'))

@app.get("/describe-total")
def get_description():
    description = describe_total()
    return JSONResponse(content=description)

@app.get("/yearly-totals")
def get_yearly_totals():
    totals = yearly_totals()
    return JSONResponse(content=totals)

@app.get("/province-totals")
def get_province_totals():
    totals = province_totals()
    return JSONResponse(content=totals)

@app.get("/train-linear-regression")
def train_and_evaluate_model():
    metrics = train_linear_regression()
    return JSONResponse(content=metrics)

@app.get("/additional-analysis")
def analyze_additional_data():
    results = additional_analysis()
    return JSONResponse(content=results)

@app.get("/plot-yearly-immigration", response_class=StreamingResponse)
async def get_yearly_immigration_plot():
    load_data()
    fig, ax = plt.subplots(figsize=(12, 10))
    sns.countplot(data=imm_df, x='EN_YEAR', palette='viridis', hue='EN_YEAR', legend=False, ax=ax)
    ax.set_title('Yearly Immigration Totals')
    
    # Rotate x-axis labels
    ax.set_xticklabels(ax.get_xticklabels(), rotation=45, ha='right')
    
    buf = BytesIO()
    plt.savefig(buf, format='png')
    buf.seek(0)
    return StreamingResponse(buf, media_type="image/png")

@app.get("/plot-province-totals", response_class=StreamingResponse)
async def get_province_totals_plot():
    load_data()
    province_totals = imm_df.groupby('EN_PROVINCE_TERRITORY').size().reset_index(name='Total')
    fig, ax = plt.subplots(figsize=(12, 10))
    sns.barplot(data=province_totals, x='EN_PROVINCE_TERRITORY', y='Total', palette='viridis', hue='EN_PROVINCE_TERRITORY', legend=False, ax=ax)
    ax.set_title('Total Immigration by Province')

    # Rotate x-axis labels
    ax.set_xticklabels(ax.get_xticklabels(), rotation=45, ha='right')
    buf = BytesIO()
    plt.savefig(buf, format='png')
    buf.seek(0)
    return StreamingResponse(buf, media_type="image/png")

@app.post("/predict")
async def predict_total_immigrants(request: Request):
    try:
        user_input = await request.json()
        required_fields = ['EN_QUARTER', 'EN_MONTH', 'EN_PROVINCE_TERRITORY', 'EN_CENSUS_DIVISION', 'EN_CENSUS_SUBDIVISION']
        if not all(field in user_input for field in required_fields):
            return JSONResponse(content={"error": "Missing required fields"}, status_code=400)

        # Logging the user input for debugging
        print("User input:", user_input)

        encoded_input = encode_input(user_input, le_quarter, le_month, le_province, le_division, le_subdivision)

        # Logging encoded input for debugging
        print("Encoded input:", encoded_input)

        prediction = linear_reg.predict([list(encoded_input.values())])[0]
        return JSONResponse(content={"predicted_total": prediction})

    except Exception as e:
        return JSONResponse(content={"error": str(e)}, status_code=500)



if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8080)
