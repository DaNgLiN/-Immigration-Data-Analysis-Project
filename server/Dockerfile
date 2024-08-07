FROM python:3
WORKDIR /server
COPY ./requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt
EXPOSE 8080
CMD [ "python", "./app.py" ]