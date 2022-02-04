import React from 'react';

function App_student() {
  return (
    <>
    <Router>
      <Switch>

        <Route exact={true} path='/home_student' component={Home_student} />
        <Route exact={true} path='/lista_cursos' component={Lista_Cursos} />
        <Route exact={true} path='/matricula_cursos' component={Matricula_curso} />
        <Route exact={true} path='/mi_aprendizaje' component={Mi_aprendizaje} />
        <Route exact={true} path='/ver_mis_cursos' component={Ver_mi_Curso} />
      </Switch>
    </Router>

  </>
    );
}

export default App_student;

