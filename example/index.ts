import {writeFileSync} from 'fs'
import {compileFromFile} from 'json-schema-to-typescript'

async function generate() {
  writeFileSync('person.d.ts', await compileFromFile('person.json'))
  writeFileSync('fhir.R4.schema.d.ts', await compileFromFile('fhir.R4.schema.json'))
}

generate()
