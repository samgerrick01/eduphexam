import React, { useState } from "react";
import GradeForm from "./components/GradeForm";
import Header from "./components/Header";
import Input from "./components/Input";

const App = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [currentId, setCurrentId] = useState(null);
  return (
    <div className="p-5">
      <Header />
      <div className="flex justify-center p-5 gap-5 mobile:flex-col mobile:items-center  tablet:flex-col tablet:items-center">
        <Input
          currentId={currentId}
          setCurrentId={setCurrentId}
          setIsEdit={setIsEdit}
          isEdit={isEdit}
        />
        <GradeForm setIsEdit={setIsEdit} setCurrentId={setCurrentId} />
      </div>
    </div>
  );
};

export default App;
