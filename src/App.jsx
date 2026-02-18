import Item from "./Item";

function App() {

  const technologies = [
    "Redux",
    "Next.js",
    "React Native",
    "Gatsby",
    "Material UI",
    "React Router"
  ];

  const appsUsingReact = [
    "Facebook",
    "Instagram",
    "WhatsApp Web",
    "Netflix",
    "Airbnb",
    "Uber"
  ];

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      
      <h1>About React</h1>
      <p>
        React is a JavaScript library used for building user interfaces.
        It is component-based and uses a Virtual DOM for efficient updates.
        React is widely used for building modern web and mobile applications.
      </p>

      <h2>Technologies Based on React</h2>
      {technologies.map((tech, index) => (
        <Item key={index} name={tech} />
      ))}

      <h2>Applications Using React</h2>
      {appsUsingReact.map((app, index) => (
        <Item key={index} name={app} />
      ))}

    </div>
  );
}

export default App;

