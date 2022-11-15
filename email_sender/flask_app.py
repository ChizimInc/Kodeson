from flask import Flask, request
from email_helpers.email_compose import h_compose_email, h_send_email_async

app = Flask(__name__)

@app.route('/api')
@app.route('/index')

async def index():
    return 'Hello world from flask!'

@app.route('/api/email_sender', methods=['POST'])
async def send_email_async():
    _imutable = request.form
    composed_email = h_compose_email(_imutable)
    await h_send_email_async(composed_email)
    return 'Success', 200

if __name__ == "__main__":
    app.run(host='0.0.0.0')
