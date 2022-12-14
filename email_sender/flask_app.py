from flask import Flask, request
from email_helpers.email_compose import f_compose_email_contact_us, f_send_email_async, f_compose_email_cv

app = Flask(__name__)

@app.route('/api')
@app.route('/index')

async def index():
    return 'Hello world from flask!'

@app.route('/api/contact_us', methods=['POST'])
async def handler_contact_us():
    composed_email = f_compose_email_contact_us(request)
    await f_send_email_async(composed_email)
    return 'Success', 200

@app.route('/api/send_cv', methods=['POST'])
async def handler_send_cv():
    composed_email = f_compose_email_cv(request)
    await f_send_email_async(composed_email)
    return 'Success', 200

if __name__ == "__main__":
    app.run(host='0.0.0.0')
