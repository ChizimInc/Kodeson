from email_helpers.email_config import EMAIL_CONFIG

from aiosmtplib import SMTP
from email.mime.multipart import MIMEMultipart
from email.mime.application import MIMEApplication
from email.mime.text import MIMEText

email_config = EMAIL_CONFIG()

smtp_host = email_config.get_smtp_host()                               
smtp_port = email_config.get_smtp_port()
email_login = email_config.get_smtp_login()
email_pass = email_config.get_smtp_pass()
email_address = email_config.get_smtp_email()

def create_file(f_bytes, file_name):
    f_obj = MIMEApplication(f_bytes, Name=file_name)
    f_obj['Content-Disposition'] = 'attachment; filename="%s"' % file_name
    return f_obj

def h_compose_email(request_dict):
    request_dict = request_dict.to_dict()

    _name = request_dict.get('name')
    _sender = request_dict.get('sender')
    _message = request_dict.get('message')
    
    _subject = "Received CV from %s" % _name

    _composedMessage = MIMEMultipart()

    _composedMessage.preamble = _subject
    _composedMessage["Subject"] = _subject
    _composedMessage["From"] = email_address
    _composedMessage["To"] = email_address

    _composedMessage.attach(MIMEText(_message, 'plain', 'utf-8'))
    # _composedMessage.attach(create_file(_composedMessage[""]))

    return _composedMessage

async def h_send_email_async(composed_message):
    smtp_object = SMTP(hostname=smtp_host, port=smtp_port)
    await smtp_object.connect()
    await smtp_object.login(email_login, email_pass)
    await smtp_object.send_message(composed_message)
    await smtp_object.quit()

