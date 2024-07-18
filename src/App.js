import  './components/App.css';
import React ,{ useState }from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavBar from './components/NavBar';
import Sidebar from './components/SideBar';
import MainContent from './components/MainContent';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter , Route, Routes } from 'react-router-dom';

import PythonBasics from './components/PythonBasics';
// Import all the new components
import PythonHome from './components/Python HOME';
// import PythonIntro from './components/Python Intro';
import PythonGetStarted from './components/Python Get Started';
import PythonSyntax from './components/Python Syntax';
// import PythonComments from './components/Python Comments';
import PythonVariables from './components/Python Variables';
import PythonDataTypes from './components/Python Data Types';
import PythonNumbers from './components/Python Numbers';
import PythonCasting from './components/Python Casting';
import PythonStrings from './components/Python Strings';
import PythonBooleans from './components/Python Booleans';
import PythonOperators from './components/Python Operators';
import PythonLists from './components/Python Lists';
import PythonTuples from './components/Python Tuples';
import PythonSets from './components/Python Sets';
import PythonDictionaries from './components/Python Dictionaries';
import PythonIfElse from './components/Python If...Else';
import PythonWhileLoops from './components/Python While Loops';
import PythonForLoops from './components/Python For Loops';
import PythonFunctions from './components/Python Functions';
import PythonLambda from './components/Python Lambda';
import PythonArrays from './components/Python Arrays';
import PythonOOPsOverview from './components/Python opps';
import PythonIterators from './components/Python Iterators';
import PythonPolymorphism from './components/Python Polymorphism';
import PythonScope from './components/Python Scope';
import PythonModules from './components/Python Modules';
import LandingPage from './components/LandingPage'; 
import PythonDates from './components/Python Dates';
import PythonMath from './components/Python Math';
import PythonJSON from './components/Python JSON';
import PythonRegEx from './components/Python RegEx';
import PythonPIP from './components/Python PIP';
import PythonTryExcept from './components/Python Try...Except';
import PythonUserInput from './components/Python User Input';
import PythonStringFormatting from './components/Python String Formatting';
import PythonOOPsClasses from './components/Python Classes';
import PythonOOPsInheritance from './components/Python Inheritance';
import PythonOOPsPolymorphism from './components/Python Polymorphism';
import PythonOOPsAbstraction from './components/Python abstraction';

// const App = () => {
//   const topics = [
//     { id: 'python-home', name: 'Python HOME', path: '/python-home' },
//     { id: 'python-intro', name: 'Python Intro', path: '/python-intro' },
//     { id: 'python-get-started', name: 'Python Get Started', path: '/python-get-started' },
//     { id: 'python-syntax', name: 'Python Syntax', path: '/python-syntax' },
//     // { id: 'python-comments', name: 'Python Comments', path: '/python-comments' },
//     { id: 'python-variables', name: 'Python Variables', path: '/python-variables' },
//     { id: 'python-data-types', name: 'Python Data Types', path: '/python-data-types' },
//     { id: 'python-numbers', name: 'Python Numbers', path: '/python-numbers' },
//     { id: 'python-casting', name: 'Python Casting', path: '/python-casting' },
//     { id: 'python-strings', name: 'Python Strings', path: '/python-strings' },
//     { id: 'python-booleans', name: 'Python Booleans', path: '/python-booleans' },
//     { id: 'python-operators', name: 'Python Operators', path: '/python-operators' },
//     { id: 'python-lists', name: 'Python Lists', path: '/python-lists' },
//     { id: 'python-tuples', name: 'Python Tuples', path: '/python-tuples' },
//     { id: 'python-sets', name: 'Python Sets', path: '/python-sets' },
//     { id: 'python-dictionaries', name: 'Python Dictionaries', path: '/python-dictionaries' },
//     { id: 'python-if-else', name: 'Python If...Else', path: '/python-if-else' },
//     { id: 'python-while-loops', name: 'Python While Loops', path: '/python-while-loops' },
//     { id: 'python-for-loops', name: 'Python For Loops', path: '/python-for-loops' },
//     { id: 'python-functions', name: 'Python Functions', path: '/python-functions' },
//     { id: 'python-lambda', name: 'Python Lambda', path: '/python-lambda' },
//     { id: 'python-arrays', name: 'Python Arrays', path: '/python-arrays' },
//     { id: 'python-classes-objects', name: 'Python Classes/Objects', path: '/python-classes-objects' },
//     { id: 'python-inheritance', name: 'Python Inheritance', path: '/python-inheritance' },
//     { id: 'python-iterators', name: 'Python Iterators', path: '/python-iterators' },
//     { id: 'python-polymorphism', name: 'Python Polymorphism', path: '/python-polymorphism' },
//     { id: 'python-scope', name: 'Python Scope', path: '/python-scope' },
//     { id: 'python-modules', name: 'Python Modules', path: '/python-modules' },
//     { id: 'python-dates', name: 'Python Dates', path: '/python-dates' },
//     { id: 'python-math', name: 'Python Math', path: '/python-math' },
//     { id: 'python-json', name: 'Python JSON', path: '/python-json' },
//     { id: 'python-regex', name: 'Python RegEx', path: '/python-regex' },
//     { id: 'python-pip', name: 'Python PIP', path: '/python-pip' },
//     { id: 'python-try-except', name: 'Python Try...Except', path: '/python-try-except' },
//     { id: 'python-user-input', name: 'Python User Input', path: '/python-user-input' },
//     { id: 'python-string-formatting', name: 'Python String Formatting', path: '/python-string-formatting' },
//   ];

//   return (
//     <BrowserRouter>
//       <NavBar />
//       <Container fluid>

//         <Row>
//           <Col sm={3}>
//             <Sidebar topics={topics} />
//           </Col>
//           <Col sm={9}>
//             <Routes>
//               <Route path="/" element={<MainContent />} />
//               <Route path="/python-basics" element={<PythonBasics />} />
//               <Route path="/python-home" element={<PythonHome />} />
//               <Route path="/python-intro" element={<PythonIntro />} />
//               <Route path="/python-get-started" element={<PythonGetStarted />} />
//               <Route path="/python-syntax" element={<PythonSyntax />} />
             
//               <Route path="/python-variables" element={<PythonVariables />} />
//               <Route path="/python-data-types" element={<PythonDataTypes />} />
//               <Route path="/python-numbers" element={<PythonNumbers />} />
//               <Route path="/python-casting" element={<PythonCasting />} />
//               <Route path="/python-strings" element={<PythonStrings />} />
//               <Route path="/python-booleans" element={<PythonBooleans />} />
//               <Route path="/python-operators" element={<PythonOperators />} />
//               <Route path="/python-lists" element={<PythonLists />} />
//               <Route path="/python-tuples" element={<PythonTuples />} />
//               <Route path="/python-sets" element={<PythonSets />} />
//               <Route path="/python-dictionaries" element={<PythonDictionaries />} />
//               <Route path="/python-if-else" element={<PythonIfElse />} />
//               <Route path="/python-while-loops" element={<PythonWhileLoops />} />
//               <Route path="/python-for-loops" element={<PythonForLoops />} />
//               <Route path="/python-functions" element={<PythonFunctions />} />
//               <Route path="/python-lambda" element={<PythonLambda />} />
//               <Route path="/python-arrays" element={<PythonArrays />} />
            
//               <Route path="/python-inheritance" element={<PythonInheritance />} />
//               <Route path="/python-iterators" element={<PythonIterators />} />
//               <Route path="/python-polymorphism" element={<PythonPolymorphism />} />
//               <Route path="/python-scope" element={<PythonScope />} />
//               <Route path="/python-modules" element={<PythonModules />} />
//               <Route path="/python-dates" element={<PythonDates />} />
//               <Route path="/python-math" element={<PythonMath />} />
//               <Route path="/python-json" element={<PythonJSON />} />
//               <Route path="/python-regex" element={<PythonRegEx />} />
//               <Route path="/python-pip" element={<PythonPIP />} />
//               <Route path="/python-try-except" element={<PythonTryExcept />} />
//               <Route path="/python-user-input" element={<PythonUserInput />} />
//               <Route path="/python-string-formatting" element={<PythonStringFormatting />} />
//             </Routes>
//           </Col>
//         </Row>
//       </Container>
//     </BrowserRouter>
//   );
// };

// export default App;
// import './components/App.css';
// import React, { useState } from 'react';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import NavBar from './components/NavBar';
// import Sidebar from './components/Sidebar';
// import MainContent from './components/MainContent';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';

// import PythonBasics from './components/PythonBasics';
// // Import all the new components
// import PythonHome from './components/PythonHome';
// import PythonIntro from './components/PythonIntro';
// import PythonGetStarted from './components/PythonGetStarted';
// import PythonSyntax from './components/PythonSyntax';
// // import PythonComments from './components/PythonComments';
// import PythonVariables from './components/PythonVariables';
// import PythonDataTypes from './components/PythonDataTypes';
// import PythonNumbers from './components/PythonNumbers';
// import PythonCasting from './components/PythonCasting';
// import PythonStrings from './components/PythonStrings';
// import PythonBooleans from './components/PythonBooleans';
// import PythonOperators from './components/PythonOperators';
// import PythonLists from './components/PythonLists';
// import PythonTuples from './components/PythonTuples';
// import PythonSets from './components/PythonSets';
// import PythonDictionaries from './components/PythonDictionaries';
// import PythonIfElse from './components/PythonIfElse';
// import PythonWhileLoops from './components/PythonWhileLoops';
// import PythonForLoops from './components/PythonForLoops';
// import PythonFunctions from './components/PythonFunctions';
// import PythonLambda from './components/PythonLambda';
// import PythonArrays from './components/PythonArrays';
// import PythonInheritance from './components/PythonInheritance';
// import PythonIterators from './components/PythonIterators';
// import Pythonexport default App);./components/PythonPolymorphism';
// import PythonScope from './components/PythonScope';
// import PythonModules from './components/PythonModules';
// import PythonDates from './components/PythonDates';
// import PythonMath from './components/PythonMath';
// import PythonJSON from './components/PythonJSON';
// import PythonRegEx from './components/PythonRegEx';
// import PythonPIP from './components/PythonPIP';
// import PythonTryExcept from './components/PythonTryExcept';
// import PythonUserInput from './components/PythonUserInput';
// import PythonStringFormatting from './components/PythonStringFormatting';
 
const App = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleToggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

    const topics = [
      { id: 'python-home', name: 'Python HOME', path: '/python-home', component: PythonHome },
      // { id: 'python-intro', name: 'Python Intro', path: '/python-intro', component: PythonIntro },
      { id: 'python-get-started', name: 'Python Get Started', path: '/python-get-started', component: PythonGetStarted },
      { id: 'python-syntax', name: 'Python Syntax', path: '/python-syntax', component: PythonSyntax },
      { id: 'python-variables', name: 'Python Variables', path: '/python-variables', component: PythonVariables },
      { id: 'python-data-types', name: 'Python Data Types', path: '/python-data-types', component: PythonDataTypes },
      { id: 'python-numbers', name: 'Python Numbers', path: '/python-numbers', component: PythonNumbers },
      { id: 'python-casting', name: 'Python Casting', path: '/python-casting', component: PythonCasting },
      { id: 'python-strings', name: 'Python Strings', path: '/python-strings', component: PythonStrings },
      { id: 'python-booleans', name: 'Python Booleans', path: '/python-booleans', component: PythonBooleans },
      { id: 'python-operators', name: 'Python Operators', path: '/python-operators', component: PythonOperators },
      { id: 'python-lists', name: 'Python Lists', path: '/python-lists', component: PythonLists },
      { id: 'python-dates', name: 'Python Dates', path: '/python-dates', component: PythonDates },
      { id: 'python-math', name: 'Python Math', path: '/python-math', component: PythonMath },
      { id: 'python-json', name: 'Python JSON', path: '/python-json', component: PythonJSON },
      { id: 'python-regex', name: 'Python RegEx', path: '/python-regex', component: PythonRegEx },
      { id: 'python-pip', name: 'Python PIP', path: '/python-pip', component: PythonPIP },
      { id: 'python-try-except', name: 'Python Try Except', path: '/python-try-except', component: PythonTryExcept },
      { id: 'python-user-input', name: 'Python User Input', path: '/python-user-input', component: PythonUserInput },
      { id: 'python-string-formatting', name: 'Python String Formatting', path: '/python-string-formatting', component: PythonStringFormatting },
      // Add more topics and components as needed
      { id: 'python-if-else', name: 'Python If...Else', path: '/python-if-else' , component: PythonIfElse},
          { id: 'python-while-loops', name: 'Python While Loops', path: '/python-while-loops',  component: PythonWhileLoops },
          { id: 'python-for-loops', name: 'Python For Loops', path: '/python-for-loops' , component: PythonForLoops},
          { id: 'python-functions', name: 'Python Functions', path: '/python-functions', component: PythonFunctions },
          { id: 'python-lambda', name: 'Python Lambda', path: '/python-lambda', component: PythonLambda },
          { id: 'python-tuples', name: 'Python Tuples', path: '/python-tuples', component: PythonTuples },
          { id: 'python-sets', name: 'Python Sets', path: '/python-sets' , component: PythonSets},
          { id: 'python-dictionaries', name: 'Python Dictionaries', path: '/python-dictionaries' , component: PythonDictionaries},
    { id : 'python-classes', name : 'Python Classes', path : '/python-classes' , component: PythonOOPsClasses},
    { id : 'python-Inheritance', name : 'Python Inheritance', path : '/python-Inheritance' , component: PythonOOPsInheritance},
    { id : 'python-polymorphism', name : 'Python Polymorphism', path : '/python-polymorphism'   , component: PythonOOPsPolymorphism},
    { id : 'python-abstraction', name : 'Python Abstraction', path : '/python-abstraction'  , component: PythonOOPsAbstraction},
    { id : 'python-iterators', name : 'Python Iterators', path : '/python-iterators' , component: PythonIterators},
    { id : 'python-polymorphism', name : 'Python Polymorphism', path : '/python-polymorphism' , component: PythonPolymorphism},
    { id : 'python-scope', name : 'Python Scope', path : '/python-scope' , component: PythonScope},
    { id : 'python-modules', name : 'Python Modules', path : '/python-modules' , component: PythonModules},
    { id : 'python-dates', name : 'Python Dates', path : '/python-dates' , component: PythonDates},
    { id : 'python-math', name : 'Python Math', path : '/python-math' , component: PythonMath},
    { id : 'python-json', name : 'Python JSON', path : '/python-json' , component: PythonJSON},
    { id : 'python-regex', name : 'Python RegEx', path : '/python-regex' , component: PythonRegEx},
    { id : 'python-pip', name : 'Python PIP', path : '/python-pip' , component: PythonPIP},
    { id : 'python-try-except', name : 'Python Try Except', path : '/python-try-except' , component: PythonTryExcept},
    { id : 'python-user-input', name : 'Python User Input', path : '/python-user-input' , component: PythonUserInput},
    { id : 'python-string-formatting', name : 'Python String Formatting', path : '/python-string-formatting' , component: PythonStringFormatting},
    { id : 'python-arrays', name : 'Python Arrays', path : '/python-arrays' , component: PythonArrays},
    { id : 'python-oops', name : 'Python OOPs Overview', path : '/python-oops' , component: PythonOOPsOverview},
    { id : 'python-iterators', name : 'Python Iterators', path : '/python-iterators' , component: PythonIterators},
    
      ];

//   return (
//     <BrowserRouter>
//       <NavBar toggleSidebar={handleToggleSidebar} />
//       <Container fluid>
//         <Row>
//           <Sidebar topics={topics} show={showSidebar} handleClose={handleToggleSidebar} />
//           <Col md={{ span: 9, offset: showSidebar ? 3 : 0 }}>
//             <Routes>
             
//               <Route path="/" element={<MainContent />} />
//               <Route path="/python-basics" element={<PythonBasics />} />
//               <Route path="/python-home" element={<PythonHome />} />
//               {/* <Route path="/python-intro" element={<PythonIntro />} /> */}
//               <Route path="/python-get-started" element={<PythonGetStarted />} />
//               <Route path="/python-syntax" element={<PythonSyntax />} />
//               <Route path="/python-variables" element={<PythonVariables />} />
//               <Route path="/python-data-types" element={<PythonDataTypes />} />
//               <Route path="/python-numbers" element={<PythonNumbers />} />
//               <Route path="/python-casting" element={<PythonCasting />} />
//               <Route path="/python-strings" element={<PythonStrings />} />
//               <Route path="/python-booleans" element={<PythonBooleans />} />
//               <Route path="/python-operators" element={<PythonOperators />} />
//               <Route path="/python-lists" element={<PythonLists />} />
//               <Route path="/python-tuples" element={<PythonTuples />} />
//               <Route path="/python-sets" element={<PythonSets />} />
//               <Route path="/python-dictionaries" element={<PythonDictionaries />} />
//               <Route path="/python-if-else" element={<PythonIfElse />} />
//               <Route path="/python-while-loops" element={<PythonWhileLoops />} />
//               <Route path="/python-for-loops" element={<PythonForLoops />} />
//               <Route path="/python-functions" element={<PythonFunctions />} />
//               <Route path="/python-lambda" element={<PythonLambda />} />
//               <Route path="/python-arrays" element={<PythonArrays />} />
//               <Route path="/python-oops" element={<PythonOOPsOverview />} />
//               <Route path="/python-iterators" element={<PythonIterators />} />
//               <Route path="/python-polymorphism" element={<PythonPolymorphism />} />
//               <Route path="/python-scope" element={<PythonScope />} />
//               <Route path="/python-modules" element={<PythonModules />} />
//               <Route path="/python-dates" element={<PythonDates />} />
//               <Route path="/python-math" element={<PythonMath />} />
//               <Route path="/python-json" element={<PythonJSON />} />
//               <Route path="/python-regex" element={<PythonRegEx />} />
//               <Route path="/python-pip" element={<PythonPIP />} />
//               <Route path="/python-try-except" element={<PythonTryExcept />} />
//               <Route path="/python-user-input" element={<PythonUserInput />} />
//               <Route path="/python-string-formatting" element={<PythonStringFormatting />} />
              
//               <Route path="/python-classes" element={<PythonOOPsClasses />} />
//               <Route path="/python-inheritance" element={<PythonOOPsInheritance />} />
//               <Route path="/python-polymorphism" element={<PythonOOPsPolymorphism />} />
//               <Route path="/python-abstraction" element={<PythonOOPsAbstraction />} />

//             </Routes>
//           </Col>
//         </Row>
//       </Container>
//     </BrowserRouter>
//   );
// };
return (
  <BrowserRouter>
    <NavBar toggleSidebar={handleToggleSidebar} />
    <Container fluid>
      <Row>
        <Sidebar topics={topics} show={showSidebar} handleClose={handleToggleSidebar} />
        <Col md={{ span: 9, offset: showSidebar ? 3 : 0 }}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/tutorials" element={<MainContent />} />
            {topics.map(topic => (
              <Route key={topic.id} path={topic.path} element={React.createElement(topic.component)} />
            ))}
          </Routes>
        </Col>
      </Row>
    </Container>
  </BrowserRouter>
);
};

export default App;