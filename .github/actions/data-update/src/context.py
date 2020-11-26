import json
import os
from pathlib import Path

import consts
import log


class Context:
    """
    Represents an application context containing shared information such as configurations, paths and secrets.
    """

    def __init__(self, out_dir_path, github_token):
        """
        Private constructor.
        """
        self._data_dir_path = out_dir_path
        self._github_token = github_token

    @staticmethod
    def _read_config_file(main_script_path):
        file_path = main_script_path.parent.joinpath("config.json")
        try:
            with open(file_path) as infile:
                return json.load(infile)
        except FileNotFoundError:
            log.abort_and_exit("CTXT", f"Context init failed, could not to read config file '{file_path}': not found.")

    @staticmethod
    def _read_env_var(var_name):
        val = os.getenv(var_name)
        if val is None:
            log.abort_and_exit("CTXT", f"Context init failed, required env var '{var_name}' is not set.")
        return val

    @staticmethod
    def create():
        """
        Read environment variables and create a new Context.
        :return: newly created Context object
        """
        data_dir_path = Path(Context._read_env_var(consts.ENV_DATA_DIR))
        github_pat = Context._read_env_var(consts.ENV_GITHUB_PAT)
        return Context(data_dir_path, github_pat)

    def get_github_token(self):
        """
        Get the GitHub API token.
        :return: GitHub API token.
        """
        return self._github_token

    def get_data_dir_path(self):
        """
        Get the pathlib.Path to the data directory, where data file outputs should go.
        :return: Path to the data directory
        """
        return self._data_dir_path
