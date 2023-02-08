const contacts = [
  {
    name: 'Ann',
    phoneNumber: '444-44-44',
  },
  {
    name: 'John',
    phoneNumber: '333-33-33',
  },
  {
    name: 'Stephan',
    phoneNumber: '555-55-55',
  },
  {
    name: 'Suzy',
    phoneNumber: '222-22-22',
  },
  {
    name: 'Adel',
    phoneNumber: '111-11-11',
  },
];

const sortContacts = (contacts, boolean) => {
  if (!Array.isArray(contacts)) return null;

  const result = contacts.sort((a, b) => {
    if (boolean === false) {
      return b.name.localeCompare(a.name);
    }
    return a.name.localeCompare(b.name);
  });

  return result;
};

console.log(sortContacts(contacts, true));
