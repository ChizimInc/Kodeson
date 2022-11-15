from flask import Flask, request
from email_helpers.email_compose import f_compose_email_contact_us, f_send_email_async

app = Flask(__name__)

@app.route('/api')
@app.route('/index')

async def index():
    return 'Hello world from flask!'

@app.route('/api/contact_us', methods=['POST'])
async def handler_contact_us():
    _imutable = request.form
    composed_email = f_compose_email_contact_us(_imutable)
    await f_send_email_async(composed_email)
    return 'Success', 200

@app.route('/api/send_cv')
async def handler_send_cv():
    _imutable = request.form
    return 'Success', 200

if __name__ == "__main__":
    app.run(host='0.0.0.0')
