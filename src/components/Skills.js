import React, { useState, useEffect } from "react";
import c from "../assets/c.png";
import cpp from "../assets/cpp.png";
import css from "../assets/css.png";
import html from "../assets/html.png";
import js from "../assets/js.png";
import mongodb from "../assets/mongodb.png";
import mysql from "../assets/mysql.png";
import next from "../assets/next.png";
import nodejs from "../assets/nodejs.png";
import postman from "../assets/postman.png";
import python from "../assets/python.png";
import react from "../assets/react.png";
import redux from "../assets/redux.png";
import solidity from "../assets/solidity.png";
import tailwind from "../assets/tailwind.svg";
import typescript from "../assets/typescript.png";
import { motion , useAnimation } from "framer-motion"
import {useInView} from "react-intersection-observer";

function Skills() {
  const [myC, setMyC] = useState(0);
  const [myCpp, setMyCpp] = useState(0);
  const [myCss, setMyCss] = useState(0);
  const [myHtml, setMyHtml] = useState(0);
  const [myJs, setMyJs] = useState(0);
  const [myMongoDb, setMyMongoDb] = useState(0);
  const [myNext, setMyNext] = useState(0);
  const [myNode, setMyNode] = useState(0);
  const [myPostman, setMyPostman] = useState(0);
  const [myPython, setMyPython] = useState(0);
  const [myReact, setMyReact] = useState(0);
  const [myRedux, setMyRedux] = useState(0);
  const [mySolidity, setMySolidity] = useState(0);
  const [myTailwind, setMyTailwind] = useState(0);
  const [myTs, setMyTs] = useState(0);

  const {ref , inView} = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if(inView){
      animation.start({
          scale:1,
          transition:{
              duration:2  , type:"spring"
          }
      })
  }
  if(!inView){
      animation.start({
          scale:0.1
      })
  }
  }, [inView])

  return (
    <div ref={ref} className="xl:pl-44 xl:pr-44 lg:pl-24 lg:pr-24 md:pl-8 md:pr-8 sm:pl-8 sm:pr-8 pl-3 pr-3 lg:pt-[100px] lg:pb-[100px] md:pt-[75px] md:pb-[75px] pt-[50px] pb-[50px] bg-black" id="skills">
      <div className="lg:grid hidden grid-cols-6 justify-between">
        <motion.div animate={animation} className="h-[120px] w-[120px] p-[16px] border-[2px] border-slate-200 rounded-full">
          <img
            src={c}
            className={`h-full w-full ${myC === 1 ? "hidden" : ""}`}
            onMouseEnter={() => setMyC(1)}
            onMouseLeave={() => setMyC(0)}
          />
          <div
            className={`h-full w-full bg-slate-200 font-semibold text-slate-900 rounded-full flex flex-row justify-center ${
              myC === 0 ? "hidden" : ""
            }`}
            onMouseEnter={() => setMyC(1)}
            onMouseLeave={() => setMyC(0)}
          >
            <div className="flex flex-col justify-center">
              <h3 className={`text-xl`}>C</h3>
            </div>
          </div>
        </motion.div>
        <motion.div animate={animation} className="h-[120px] w-[120px] p-[16px] border-[2px] border-slate-200 rounded-full">
          <img
            src={cpp}
            className={`h-full w-full ${myCpp === 1 ? "hidden" : ""}`}
            onMouseEnter={() => setMyCpp(1)}
            onMouseLeave={() => setMyCpp(0)}
          />
          <div
            className={`h-full w-full bg-slate-200 font-semibold text-slate-900 rounded-full flex flex-row justify-center ${
              myCpp === 0 ? "hidden" : ""
            }`}
            onMouseEnter={() => setMyCpp(1)}
            onMouseLeave={() => setMyCpp(0)}
          >
            <div className="flex flex-col justify-center">
              <h3 className={`text-xl`}>C++</h3>
            </div>
          </div>
        </motion.div>
        <motion.div animate={animation} className="h-[120px] w-[120px] p-[16px] border-[2px] border-slate-200 rounded-full">
          <img
            src={html}
            className={`h-full w-full ${myHtml === 1 ? "hidden" : ""}`}
            onMouseEnter={() => setMyHtml(1)}
            onMouseLeave={() => setMyHtml(0)}
          />
          <div
            className={`h-full w-full bg-slate-200 font-semibold text-slate-900 rounded-full flex flex-row justify-center ${
              myHtml === 0 ? "hidden" : ""
            }`}
            onMouseEnter={() => setMyHtml(1)}
            onMouseLeave={() => setMyHtml(0)}
          >
            <div className="flex flex-col justify-center">
              <h3 className={`text-xl`}>HTML</h3>
            </div>
          </div>
        </motion.div>
        <motion.div animate={animation} className="h-[120px] w-[120px] p-[16px] border-[2px] border-slate-200 rounded-full">
          <img
            src={js}
            className={`h-full w-full ${myJs === 1 ? "hidden" : ""}`}
            onMouseEnter={() => setMyJs(1)}
            onMouseLeave={() => setMyJs(0)}
          />
          <div
            className={`h-full w-full bg-slate-200 font-semibold text-slate-900 rounded-full flex flex-row justify-center ${
              myJs === 0 ? "hidden" : ""
            }`}
            onMouseEnter={() => setMyJs(1)}
            onMouseLeave={() => setMyJs(0)}
          >
            <div className="flex flex-col justify-center">
              <h3 className={`text-xl`}>JS</h3>
            </div>
          </div>
        </motion.div>
        <motion.div animate={animation} className="h-[120px] w-[120px] p-[16px] border-[2px] border-slate-200 rounded-full">
          <img
            src={typescript}
            className={`h-full w-full p-[10px] ${myTs === 1 ? "hidden" : ""}`}
            onMouseEnter={() => setMyTs(1)}
            onMouseLeave={() => setMyTs(0)}
          />
          <div
            className={`h-full w-full bg-slate-200 font-semibold text-slate-900 rounded-full flex flex-row justify-center ${
              myTs === 0 ? "hidden" : ""
            }`}
            onMouseEnter={() => setMyTs(1)}
            onMouseLeave={() => setMyTs(0)}
          >
            <div className="flex flex-col justify-center">
              <h3 className={`text-xl`}>TS</h3>
            </div>
          </div>
        </motion.div>
        <motion.div animate={animation} className="h-[120px] w-[120px] p-[16px] border-[2px] border-slate-200 rounded-full">
          <img
            src={css}
            className={`h-full w-full ${myCss === 1 ? "hidden" : ""}`}
            onMouseEnter={() => setMyCss(1)}
            onMouseLeave={() => setMyCss(0)}
          />
          <div
            className={`h-full w-full bg-slate-200 font-semibold text-slate-900 rounded-full flex flex-row justify-center ${
              myCss === 0 ? "hidden" : ""
            }`}
            onMouseEnter={() => setMyCss(1)}
            onMouseLeave={() => setMyCss(0)}
          >
            <div className="flex flex-col justify-center">
              <h3 className={`text-xl`}>CSS</h3>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="lg:grid hidden grid-cols-5 mt-6 pl-10 pr-10 justify-between">
        <motion.div animate={animation} className="h-[120px] w-[120px] p-[10px] border-[2px] border-slate-200 rounded-full">
          <img
            src={tailwind}
            className={`h-full w-full ${myTailwind === 1 ? "hidden" : ""}`}
            onMouseEnter={() => setMyTailwind(1)}
            onMouseLeave={() => setMyTailwind(0)}
          />
          <div
            className={`h-full w-full bg-slate-200 font-semibold text-slate-900 rounded-full flex flex-row justify-center ${
              myTailwind === 0 ? "hidden" : ""
            }`}
            onMouseEnter={() => setMyTailwind(1)}
            onMouseLeave={() => setMyTailwind(0)}
          >
            <div className="flex flex-col justify-center">
              <h3 className={`text-xl`}>Tailwind</h3>
            </div>
          </div>
        </motion.div>
        <motion.div animate={animation} className="h-[120px] w-[120px] p-[16px] border-[2px] border-slate-200 rounded-full">
          <img
            src={python}
            className={`h-full w-full ${myPython === 1 ? "hidden" : ""}`}
            onMouseEnter={() => setMyPython(1)}
            onMouseLeave={() => setMyPython(0)}
          />
          <div
            className={`h-full w-full bg-slate-200 font-semibold text-slate-900 rounded-full flex flex-row justify-center ${
              myPython === 0 ? "hidden" : ""
            }`}
            onMouseEnter={() => setMyPython(1)}
            onMouseLeave={() => setMyPython(0)}
          >
            <div className="flex flex-col justify-center">
              <h3 className={`text-xl`}>Python</h3>
            </div>
          </div>
        </motion.div>
        <motion.div animate={animation} className="h-[120px] w-[120px] p-[16px] border-[2px] border-slate-200 rounded-full">
          <img
            src={react}
            className={`h-full w-full ${myReact === 1 ? "hidden" : ""}`}
            onMouseEnter={() => setMyReact(1)}
            onMouseLeave={() => setMyReact(0)}
          />
          <div
            className={`h-full w-full bg-slate-200 font-semibold text-slate-900 rounded-full flex flex-row justify-center ${
              myReact === 0 ? "hidden" : ""
            }`}
            onMouseEnter={() => setMyReact(1)}
            onMouseLeave={() => setMyReact(0)}
          >
            <div className="flex flex-col justify-center">
              <h3 className={`text-xl`}>React</h3>
            </div>
          </div>
        </motion.div>
        <motion.div animate={animation} className="h-[120px] w-[120px] p-[16px] border-[2px] border-slate-200 rounded-full">
          <img
            src={redux}
            className={`h-full w-full ${myRedux === 1 ? "hidden" : ""}`}
            onMouseEnter={() => setMyRedux(1)}
            onMouseLeave={() => setMyRedux(0)}
          />
          <div
            className={`h-full w-full bg-slate-200 font-semibold text-slate-900 rounded-full flex flex-row justify-center ${
              myRedux === 0 ? "hidden" : ""
            }`}
            onMouseEnter={() => setMyRedux(1)}
            onMouseLeave={() => setMyRedux(0)}
          >
            <div className="flex flex-col justify-center">
              <h3 className={`text-xl`}>Redux</h3>
            </div>
          </div>
        </motion.div>
        <motion.div animate={animation} className="h-[120px] w-[120px] p-[16px] border-[2px] border-slate-200 rounded-full">
          <img
            src={next}
            className={`h-full w-full bg-white ${
              myNext === 1 ? "hidden" : ""
            } rounded-full border-[0.5px]`}
            onMouseEnter={() => setMyNext(1)}
            onMouseLeave={() => setMyNext(0)}
          />
          <div
            className={`h-full w-full bg-slate-200 font-semibold text-slate-900 rounded-full flex flex-row justify-center ${
              myNext === 0 ? "hidden" : ""
            }`}
            onMouseEnter={() => setMyNext(1)}
            onMouseLeave={() => setMyNext(0)}
          >
            <div className="flex flex-col bg-white rounded-full justify-center">
              <h3 className={`text-xl`}>Next Js</h3>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="lg:grid hidden grid-cols-4 justify-between mt-6 pl-20 pr-20">
        <motion.div animate={animation} className="h-[120px] w-[120px] p-[16px] border-[2px] border-slate-200 rounded-full">
          <img
            src={solidity}
            className={`h-full w-full ${mySolidity === 1 ? "hidden" : ""}`}
            onMouseEnter={() => setMySolidity(1)}
            onMouseLeave={() => setMySolidity(0)}
          />
          <div
            className={`h-full w-full bg-slate-200 font-semibold text-slate-900 rounded-full flex flex-row justify-center ${
              mySolidity === 0 ? "hidden" : ""
            }`}
            onMouseEnter={() => setMySolidity(1)}
            onMouseLeave={() => setMySolidity(0)}
          >
            <div className="flex flex-col justify-center">
              <h3 className={`text-xl`}>Solidity</h3>
            </div>
          </div>
        </motion.div>
        <motion.div animate={animation} className="h-[120px] w-[120px] p-[16px] border-[2px] border-slate-200 rounded-full">
          <img
            src={nodejs}
            className={`h-full w-full ${myNode === 1 ? "hidden" : ""}`}
            onMouseEnter={() => setMyNode(1)}
            onMouseLeave={() => setMyNode(0)}
          />
          <div
            className={`h-full w-full bg-slate-200 font-semibold text-slate-900 rounded-full flex flex-row justify-center ${
              myNode === 0 ? "hidden" : ""
            }`}
            onMouseEnter={() => setMyNode(1)}
            onMouseLeave={() => setMyNode(0)}
          >
            <div className="flex flex-col justify-center">
              <h3 className={`text-xl`}>Node Js</h3>
            </div>
          </div>
        </motion.div>
        <motion.div animate={animation} className="h-[120px] w-[120px] p-[16px] border-[2px] border-slate-200 rounded-full">
          <img
            src={mongodb}
            className={`h-full w-full ${myMongoDb === 1 ? "hidden" : ""}`}
            onMouseEnter={() => setMyMongoDb(1)}
            onMouseLeave={() => setMyMongoDb(0)}
          />
          <div
            className={`h-full w-full bg-slate-200 font-semibold text-slate-900 rounded-full flex flex-row justify-center ${
              myMongoDb === 0 ? "hidden" : ""
            }`}
            onMouseEnter={() => setMyMongoDb(1)}
            onMouseLeave={() => setMyMongoDb(0)}
          >
            <div className="flex flex-col justify-center">
              <h3 className={`text-xl`}>Mongo</h3>
            </div>
          </div>
        </motion.div>
        <motion.div animate={animation} className="h-[120px] w-[120px] p-[16px] border-[2px] border-slate-200 rounded-full">
          <img
            src={postman}
            className={`h-full w-full ${myPostman === 1 ? "hidden" : ""}`}
            onMouseEnter={() => setMyPostman(1)}
            onMouseLeave={() => setMyPostman(0)}
          />
          <div
            className={`h-full w-full bg-slate-200 font-semibold text-slate-900 rounded-full flex flex-row justify-center ${
              myPostman === 0 ? "hidden" : ""
            }`}
            onMouseEnter={() => setMyPostman(1)}
            onMouseLeave={() => setMyPostman(0)}
          >
            <div className="flex flex-col justify-center">
              <h3 className={`text-xl`}>Postman</h3>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ******************************************************************************* */}

      <div className="lg:hidden grid md:grid-cols-4 xs:grid-cols-3 grid-cols-2 gap-y-[16px] justify-around">
        <div className="flex justify-center">
          <motion.div animate={animation} className="h-[120px] w-[120px] p-[16px] border-[2px] border-slate-200 rounded-full">
            <img
              src={c}
              className={`h-full w-full ${myC === 1 ? "hidden" : ""}`}
              onClick={() => setMyC(1)}
            />
            <div
              className={`h-full w-full bg-slate-200 font-semibold text-slate-900 rounded-full flex flex-row justify-center ${
                myC === 0 ? "hidden" : ""
              }`}
              onClick={() => setMyC(0)}
            >
              <div className="flex flex-col justify-center">
                <h3 className={`text-xl`}>C</h3>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="flex justify-center">
          <motion.div animate={animation} className="h-[120px] w-[120px] p-[16px] border-[2px] border-slate-200 rounded-full">
            <img
              src={cpp}
              className={`h-full w-full ${myCpp === 1 ? "hidden" : ""}`}
              onClick={() => setMyCpp(1)}
            />
            <div
              className={`h-full w-full bg-slate-200 font-semibold text-slate-900 rounded-full flex flex-row justify-center ${
                myCpp === 0 ? "hidden" : ""
              }`}
              onClick={() => setMyCpp(0)}
            >
              <div className="flex flex-col justify-center">
                <h3 className={`text-xl`}>C++</h3>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="flex justify-center">
          <motion.div animate={animation} className="h-[120px] w-[120px] p-[16px] border-[2px] border-slate-200 rounded-full">
            <img
              src={html}
              className={`h-full w-full ${myHtml === 1 ? "hidden" : ""}`}
              onClick={() => setMyHtml(1)}
            />
            <div
              className={`h-full w-full bg-slate-200 font-semibold text-slate-900 rounded-full flex flex-row justify-center ${
                myHtml === 0 ? "hidden" : ""
              }`}
              onClick={() => setMyHtml(0)}
            >
              <div className="flex flex-col justify-center">
                <h3 className={`text-xl`}>HTML</h3>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="flex justify-center">
          <motion.div animate={animation} className="h-[120px] w-[120px] p-[16px] border-[2px] border-slate-200 rounded-full">
            <img
              src={js}
              className={`h-full w-full ${myJs === 1 ? "hidden" : ""}`}
              onClick={() => setMyJs(1)}
            />
            <div
              className={`h-full w-full bg-slate-200 font-semibold text-slate-900 rounded-full flex flex-row justify-center ${
                myJs === 0 ? "hidden" : ""
              }`}
              onClick={() => setMyJs(0)}
            >
              <div className="flex flex-col justify-center">
                <h3 className={`text-xl`}>JS</h3>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="flex justify-center">
          <motion.div animate={animation} className="h-[120px] w-[120px] p-[16px] border-[2px] border-slate-200 rounded-full">
            <img
              src={typescript}
              className={`h-full w-full p-[10px] ${myTs === 1 ? "hidden" : ""}`}
              onClick={() => setMyTs(1)}
            />
            <div
              className={`h-full w-full bg-slate-200 font-semibold text-slate-900 rounded-full flex flex-row justify-center ${
                myTs === 0 ? "hidden" : ""
              }`}
              onClick={() => setMyTs(0)}
            >
              <div className="flex flex-col justify-center">
                <h3 className={`text-xl`}>TS</h3>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="flex justify-center">
          <motion.div animate={animation} className="h-[120px] w-[120px] p-[16px] border-[2px] border-slate-200 rounded-full">
            <img
              src={css}
              className={`h-full w-full ${myCss === 1 ? "hidden" : ""}`}
              onClick={() => setMyCss(1)}
            />
            <div
              className={`h-full w-full bg-slate-200 font-semibold text-slate-900 rounded-full flex flex-row justify-center ${
                myCss === 0 ? "hidden" : ""
              }`}
              onClick={() => setMyCss(0)}
            >
              <div className="flex flex-col justify-center">
                <h3 className={`text-xl`}>CSS</h3>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="flex justify-center">
          <motion.div animate={animation} className="h-[120px] w-[120px] p-[10px] border-[2px] border-slate-200 rounded-full">
            <img
              src={tailwind}
              className={`h-full w-full ${myTailwind === 1 ? "hidden" : ""}`}
              onClick={() => setMyTailwind(1)}
            />
            <div
              className={`h-full w-full bg-slate-200 font-semibold text-slate-900 rounded-full flex flex-row justify-center ${
                myTailwind === 0 ? "hidden" : ""
              }`}
              onClick={() => setMyTailwind(0)}
            >
              <div className="flex flex-col justify-center">
                <h3 className={`text-xl`}>Tailwind</h3>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="flex justify-center">
          <motion.div animate={animation} className="h-[120px] w-[120px] p-[16px] border-[2px] border-slate-200 rounded-full">
            <img
              src={python}
              className={`h-full w-full ${myPython === 1 ? "hidden" : ""}`}
              onClick={() => setMyPython(1)}
            />
            <div
              className={`h-full w-full bg-slate-200 font-semibold text-slate-900 rounded-full flex flex-row justify-center ${
                myPython === 0 ? "hidden" : ""
              }`}
              onClick={() => setMyPython(0)}
            >
              <div className="flex flex-col justify-center">
                <h3 className={`text-xl`}>Python</h3>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="flex justify-center">
          <motion.div animate={animation} className="h-[120px] w-[120px] p-[16px] border-[2px] border-slate-200 rounded-full">
            <img
              src={react}
              className={`h-full w-full ${myReact === 1 ? "hidden" : ""}`}
              onClick={() => setMyReact(1)}
            />
            <div
              className={`h-full w-full bg-slate-200 font-semibold text-slate-900 rounded-full flex flex-row justify-center ${
                myReact === 0 ? "hidden" : ""
              }`}
              onClick={() => setMyReact(0)}
            >
              <div className="flex flex-col justify-center">
                <h3 className={`text-xl`}>React</h3>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="flex justify-center">
          <motion.div animate={animation} className="h-[120px] w-[120px] p-[16px] border-[2px] border-slate-200 rounded-full">
            <img
              src={redux}
              className={`h-full w-full ${myRedux === 1 ? "hidden" : ""}`}
              onClick={() => setMyRedux(1)}
            />
            <div
              className={`h-full w-full bg-slate-200 font-semibold text-slate-900 rounded-full flex flex-row justify-center ${
                myRedux === 0 ? "hidden" : ""
              }`}
              onClick={() => setMyRedux(0)}
            >
              <div className="flex flex-col justify-center">
                <h3 className={`text-xl`}>Redux</h3>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="flex justify-center">
          <motion.div animate={animation} className="h-[120px] w-[120px] p-[16px] border-[2px] border-slate-200 rounded-full">
            <img
              src={next}
              className={`h-full w-full bg-white ${
                myNext === 1 ? "hidden" : ""
              } rounded-full border-[0.5px]`}
              onClick={() => setMyNext(1)}
            />
            <div
              className={`h-full w-full bg-slate-200 font-semibold text-slate-900 rounded-full flex flex-row justify-center ${
                myNext === 0 ? "hidden" : ""
              }`}
              onClick={() => setMyNext(0)}
            >
              <div className="flex flex-col bg-white rounded-full justify-center">
                <h3 className={`text-xl`}>Next Js</h3>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="flex justify-center">
          <motion.div animate={animation} className="h-[120px] w-[120px] p-[16px] border-[2px] border-slate-200 rounded-full">
            <img
              src={solidity}
              className={`h-full w-full ${mySolidity === 1 ? "hidden" : ""}`}
              onClick={() => setMySolidity(1)}
            />
            <div
              className={`h-full w-full bg-slate-200 font-semibold text-slate-900 rounded-full flex flex-row justify-center ${
                mySolidity === 0 ? "hidden" : ""
              }`}
              onClick={() => setMySolidity(0)}
            >
              <div className="flex flex-col justify-center">
                <h3 className={`text-xl`}>Solidity</h3>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="flex justify-center">
          <motion.div animate={animation} className="h-[120px] w-[120px] p-[16px] border-[2px] border-slate-200 rounded-full">
            <img
              src={nodejs}
              className={`h-full w-full ${myNode === 1 ? "hidden" : ""}`}
              onClick={() => setMyNode(1)}
            />
            <div
              className={`h-full w-full bg-slate-200 font-semibold text-slate-900 rounded-full flex flex-row justify-center ${
                myNode === 0 ? "hidden" : ""
              }`}
              onClick={() => setMyNode(0)}
            >
              <div className="flex flex-col justify-center">
                <h3 className={`text-xl`}>Node Js</h3>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="flex justify-center">
          <motion.div animate={animation} className="h-[120px] w-[120px] p-[16px] border-[2px] border-slate-200 rounded-full">
            <img
              src={mongodb}
              className={`h-full w-full ${myMongoDb === 1 ? "hidden" : ""}`}
              onClick={() => setMyMongoDb(1)}
            />
            <div
              className={`h-full w-full bg-slate-200 font-semibold text-slate-900 rounded-full flex flex-row justify-center ${
                myMongoDb === 0 ? "hidden" : ""
              }`}
              onClick={() => setMyMongoDb(0)}
            >
              <div className="flex flex-col justify-center">
                <h3 className={`text-xl`}>Mongo</h3>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="flex justify-center">
          <motion.div animate={animation} className="h-[120px] w-[120px] p-[16px] border-[2px] border-slate-200 rounded-full">
            <img
              src={postman}
              className={`h-full w-full ${myPostman === 1 ? "hidden" : ""}`}
              onClick={() => setMyPostman(1)}
            />
            <div
              className={`h-full w-full bg-slate-200 font-semibold text-slate-900 rounded-full flex flex-row justify-center ${
                myPostman === 0 ? "hidden" : ""
              }`}
              onClick={() => setMyPostman(0)}
            >
              <div className="flex flex-col justify-center">
                <h3 className={`text-xl`}>Postman</h3>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Skills;



