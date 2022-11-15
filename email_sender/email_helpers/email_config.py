from json import load


class EMAIL_CONFIG:
    def __init__(self):
        self.__settings_file = "email_helpers/settings.json"
        self.__email_config = None
        self.__read_config()

    def __read_config(self):
        with open(self.__settings_file, "r") as json_file:
            self.__email_config = load(json_file)
            json_file.close()

    def get_smtp_host(self):
        return self.__email_config.get("smtp").get("server")

    def get_smtp_port(self):
        return self.__email_config.get("smtp").get("port")

    def get_smtp_login(self):
        return self.__email_config.get("credentials").get("email_id")

    def get_smtp_pass(self):
        return self.__email_config.get("credentials").get("password")

    def get_smtp_email(self):
        return self.__email_config.get("smtp").get("email")

