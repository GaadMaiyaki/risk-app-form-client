import React from "react";
import ReactDOM from "react-dom/client";

import "./index.scss";
import "react-tooltip/dist/react-tooltip.css";

import App from "./App";

import { BrowserRouter as Router } from "react-router-dom";

import { QueryClientProvider, QueryClient } from "react-query";

import { ReactQueryDevtools } from "react-query/devtools";

import reportWebVitals from "./reportWebVitals";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <React.Suspense fallback={<div>booting up...</div>}>
      <Router>
        <QueryClientProvider client={queryClient}>
          <App />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </Router>
    </React.Suspense>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//import React from "react";

//import Pagination from "../../components/resuable/pagination";

//import { fields } from "../../data";

//import { useRefs } from "./../../hooks/useRefs";
//import { structredFormGroup } from "./../../utils/index";

//const FormPage = () => {
//  const groupedFields = structredFormGroup(fields);

//  const len = Object.keys(groupedFields || []);

//  const [currentSection, setCurrentSection] = React.useState(1);

//  const currentGroup = groupedFields?.[currentSection] || [];

//  const refs: any = useRefs(currentGroup);

//  const eV: Array<any> = Object.values(currentGroup);

//  const rF = fields.reduce((a: any, b: any) => {
//    a[b.name] = b.value;

//    return a;
//  }, {});

//  return (
//    <div>
//      <button
//        onClick={() => {
//          refs.current["value4"].current.scrollIntoView();
//        }}
//      >
//        click
//      </button>
//      FormPage
//      {/*<div className="my-5 py-5">
//        <div className="bg-primary text-white p-4 my-5">
//          {currentGroup?.[1]?.[0]?.section_name}
//        </div>
//        {Array.from({ length: eV.length }).map((v, i: number) => {
//          return (
//            <div className="my-5 bg-dark text-white shadow-sm">
//              {eV[i].map((v: any) => {
//                //want to enable the field only if the value of such field
//                //is equal to its dependency value

//                const showing =
//                  !!v.value_dep &&
//                  v.value_dep.some(({ name, value }: any) => {
//                    return rF[name] === value;
//                  });

//                const disabled =
//                  !!v.dependencies &&
//                  v.dependencies.some((v: string) => {
//                    return !rF[v] || rF[v] === "";
//                  });

//                if (!!v.value_dep) {
//                  const showing = v.value_dep.some(({ name, value }: any) => {
//                    console.log(
//                      rF[name],
//                      value,
//                      "cheeck man",
//                      rF[name] === value
//                    );
//                    return rF[name] === value;
//                  });

//                  if (showing) {
//                    return (
//                      <div className="my-5" ref={refs.current[v.value]}>
//                        {v.value}
//                        <input value={v.value || ""} disabled={disabled} />
//                      </div>
//                    );
//                  }
//                } else {
//                  return (
//                    <>
//                      {
//                        <div className="my-5" ref={refs.current[v.value]}>
//                          {v.value}
//                          <input value={v.value || ""} disabled={disabled} />
//                        </div>
//                      }
//                    </>
//                  );
//                }
//              })}
//            </div>
//          );
//        })}
//      </div>*/}
//      <div>
//        {/*<Pagination
//          pageCount={len.length}
//          onPageChange={({ selected: i }: { selected: number }) => {
//            console.log(i, "this is the pagination man");
//            setCurrentSection(++i);
//          }}
//        />*/}
//        {/*{len.map((v, i) => {
//          return (
//            <button
//              onClick={() => {
//                setCurrentSection(+v);
//              }}
//            >
//              {v}
//            </button>
//          );
//        })}*/}
//      </div>
//    </div>
//  );
//};

//export default FormPage;

//{
//  formSections.map((section) => (
//    <button
//      className="btn btn-primary mx-1"
//      disabled={
//        //false
//        !!s?.[section]
//          ? false
//          : criteria(formik) && +section !== currentFormSection
//      }
//      type="submit"
//      onClick={() => {
//        console.log(formik.isValid, "is valid mans");
//        flushSync(() => {
//          formik.validateForm();
//        });

//        flushSync(() => {
//          handleErr(formik.errors);
//        });

//        flushSync(() => {
//          if (!!s?.[currentFormSection] || !!s[section]) {
//            handleSectionChange(+section, "default");
//          }
//        });

//        flushSync(() => {
//          setS((p: any) => {
//            return {
//              ...p,
//              [currentFormSection]: formik.isValid,
//            };
//          });
//        });
//      }}
//    >
//      {section}
//    </button>
//  ));
//}

//const [s, setS] = React.useState<any>({});

//console.log(s, section, "this is s man");

//const criteria = ({ isValid, dirty }: any) => {
//  if (!isValid) {
//    return true;
//  }

//  return false;
//};

//{
/*<Button
                  onClick={() => {
                    formik.isValid && handleSectionChange("previous");

                    !formik.isValid && handleError(formik.errors, refs);

                    formik.setSubmitting(false);
                  }}
                  type="submit"
                  title=""
                  color="primary"
                  size="lg"
                  label="Previous"
                  disabled={!shouldPrevious}
                  classes="bg-none"
                  renderComponent={() => (
                    <span>{shouldPrevious && getPreviousSectionName()}</span>
                  )}
                />

                <Button
                  onClick={() => {
                    !formik.isValid && handleError(formik.errors, refs);

                    formik.isValid && handleSectionChange("next");

                    formik.setSubmitting(false);
                  }}
                  type="submit"
                  title=""
                  color="primary"
                  size="lg"
                  label="Next"
                  disabled={!shouldNext}
                  classes="mx-2 bg-none"
                  renderComponent={() => (
                    <span>{shouldNext && getNextSectionName()}</span>
                  )}
                />*/
//}
