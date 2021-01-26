import Airtable from 'airtable';

// api keys are confidential
const base = new Airtable({ apiKey: 'keyJCjnQAogYOWC9h' }).base(
  'appVlUUCiAFlYmU7F'
);

export default base