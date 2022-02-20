
import React from "react";
import FormRegister from "./FormRegister";
import fireDB from '../firebase'

const Register = () => {
  
  const addEdit = obj => {
      fireDB.child('clients').push(
        obj,
        error => {
          if(error){
            console.log(error)
          }
        }
      )
  }

  
  return (
    <div>
      <div>
        <h2> Lista de Clientes </h2>{" "}
      </div>{" "}
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Nome{" "}
                    </th>{" "}
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Idade{" "}
                    </th>{" "}
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Estado Cívil{" "}
                    </th>{" "}
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      CPF{" "}
                    </th>{" "}
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Cidade{" "}
                    </th>{" "}
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Estado{" "}
                    </th>{" "}
                    <th scope="col" className="relative px-8 py-5">
                      <span className="sr-only"> Edit </span>{" "}
                    </th>{" "}
                  </tr>{" "}
                </thead>{" "}
              </table>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>
      <div className="row">
        <div className="col-md-5">
          <FormRegister  addEdit={addEdit}/>
        </div>
      </div>{" "}
    </div>
  );
};

export default Register;
