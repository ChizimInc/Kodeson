FROM python:3

WORKDIR /usr/src/app

COPY ./email-sender/ ./
RUN pip install --no-cache-dir -r requirements.txt
ENV FLASK_ENV production

EXPOSE 5000

CMD [ "gunicorn","-b", "0.0.0.0:5000", "main:app" ]