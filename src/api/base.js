import Airtable from 'airtable';

const base = new Airtable({ apiKey: 'keyJCjnQAogYOWC9h' }).base(
  'appVlUUCiAFlYmU7F'
);

export default base