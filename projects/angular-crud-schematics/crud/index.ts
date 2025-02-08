import { Rule, SchematicContext, Tree, apply, url, template, move, mergeWith } from '@angular-devkit/schematics';
import { strings } from '@angular-devkit/core';
import * as fs from 'fs';
import { Schema } from './schema';

export default function crud(options: Schema): Rule {
  return (_tree: Tree, _context: SchematicContext) => {
    _context.logger.info(`Creating CRUD for entity: ${options.entityName}`);

    const templateSource = apply(url('./files'), [
      template({
        ...options,
        ...strings,
      }),
    ]);

    return mergeWith(templateSource);
  };
}