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

def f_compose_email_cv(request_dict):
    request_dict = request_dict.to_dict()

    _f_name = request_dict.get('first_name')
    _l_name = request_dict.get("last_name")
    _job_position = request_dict.get('job_position')
    _phone = request_dict.get('phone')
    _email = request_dict.get('phone')
    _message = request_dict.get('message')

    _root_content = "Name: %s %s" % (_f_name, _l_name)
    _root_content += "\nPhone: %s" % _phone
    _root_content += "\nEmail: %s" % _email
    _root_content += "\nJob Position: %s" % _job_position
    _root_content += "\n\n"
    _root_content += _message

    _subject = "CV from %s %s" % (_f_name, _l_name)
    _composedMessage = MIMEMultipart()
    _composedMessage["Subject"] = _subject
    _composedMessage["From"] = "Not Used"
    _composedMessage["To"] = email_address

    _composedMessage.attach(MIMEText(_root_content, 'plain', 'utf-8'))
    return _composedMessage


def f_compose_email_contact_us(request_dict):
    request_dict = request_dict.to_dict()

    _name = request_dict.get('name')
    _sender = request_dict.get('sender')
    _message = request_dict.get('message')
    _company = request_dict.get('company')
    _phone = request_dict.get('phone')

    _root_content = "Company: %s" % _company
    _root_content += "\nName: %s" % _name
    _root_content += "\nPhone: %s" % _phone
    _root_content += "\nEmail: %s" % _sender
    _root_content += "\n\n"
    _root_content += _message

    _subject = "Contact us %s" % _company

    _composedMessage = MIMEMultipart()

    _composedMessage.preamble = _subject
    _composedMessage["Subject"] = _subject
    _composedMessage["From"] = "Not Used"
    _composedMessage["To"] = email_address

    _composedMessage.attach(MIMEText(_root_content, 'plain', 'utf-8'))
    # _composedMessage.attach(create_file(_composedMessage[""]))

    return _composedMessage

async def f_send_email_async(composed_message):
    smtp_object = SMTP(hostname=smtp_host, port=smtp_port)
    await smtp_object.connect()
    await smtp_object.login(email_login, email_pass)
    await smtp_object.send_message(composed_message)
    await smtp_object.quit()

