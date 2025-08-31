exports.home = (req, res) => {
  const yourName = 'Vaibhavi Doshi';                 
  const headerTitle = 'The MEAN Stack';             

  const definitions = [
    {
      term: 'MongoDB',
      definition:
        'MongoDB is a document-oriented NoSQL database storing JSON-like documents with dynamic schemas, enabling flexible, scalable data models for modern applications.'
    },
    {
      term: 'Express',
      definition:
        'Express is a minimalist Node.js web framework that simplifies routing, middleware, and server logic for building APIs and web apps efficiently.'
    },
    {
      term: 'Angular',
      definition:
        'Angular is a TypeScript-based front-end framework for building dynamic, component-driven single-page applications with powerful tooling and strong architecture patterns.'
    },
    {
      term: 'Node.js',
      definition:
        'Node.js is a JavaScript runtime built on V8 that enables fast, non-blocking server-side applications using event-driven, asynchronous I/O operations.'
    }
  ];

  res.render('index', { yourName, headerTitle, definitions });
};
