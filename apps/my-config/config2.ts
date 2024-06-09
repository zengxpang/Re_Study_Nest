import { readFileSync } from 'fs';
import * as yaml from 'js-yaml';
import { join } from 'path';
import * as process from 'process';

const YAML_CONFIG_FILENAME = 'aaa.yaml';

export default () => {
  return yaml.load(
    readFileSync(process.cwd() + '/apps/my-config/aaa.yaml', 'utf8'),
  ) as Record<string, any>;
};
