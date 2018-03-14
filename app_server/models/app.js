const express = require('express');
const path = require('path');

const logger = require('morgan');
const cookierParser = require('cookie-parser');
const bodyParser = require('body-parser');
require('.app_server/models/db');

const index = require('.app_server/routes/index');