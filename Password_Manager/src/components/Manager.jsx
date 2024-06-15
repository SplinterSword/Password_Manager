import React from "react";
import { useRef, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Manager = () => {
  const ref = useRef();
  const passwordRef = useRef();
  const [form, setform] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setPasswordArray] = useState([]);

  useEffect(() => {
    let passwords = localStorage.getItem("password");
    if (passwords) {
      setPasswordArray(JSON.parse(passwords));
    }
  }, []);

  const showPassword = () => {
    if (ref.current.src.includes("eyecross.svg")) {
      ref.current.src = "eye.svg";
      passwordRef.current.type = "text";
    } else {
      ref.current.src = "eyecross.svg";
      passwordRef.current.type = "password";
    }
  };

  const savePassword = () => {
    if (form.site.length > 3 && form.password.length>3 && form.username.length>3){
      setPasswordArray([...passwordArray, { ...form, id: uuidv4() }]);
      localStorage.setItem(
        "password",
        JSON.stringify([...passwordArray, { ...form, id: uuidv4() }])
      );
      setform({ site: "", username: "", password: "" });
    }
    else {
      alert("Error: Password not saved")
    }
    
    // toast("Password Saved Successfully", {
    //   position: "top-right",
    //   autoClose: 5000,
    //   hideProgressBar: false,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    //   progress: undefined,
    //   theme: "dark",
    // });
  };

  const deletePassword = (id) => {
    let c = confirm("Do you really want to delete this password?");
    if (c) {
      setPasswordArray(passwordArray.filter((item) => item.id != id));
      localStorage.setItem(
        "password",
        JSON.stringify(passwordArray.filter((item) => item.id != id))
      );
      // toast("Password Deleted", {
      //   position: "top-right",
      //   autoClose: 5000,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      //   theme: "dark",
      // });
    }
  };

  const editPassword = (id) => {
    setform(passwordArray.filter((item) => item.id == id)[0]);
    setPasswordArray(passwordArray.filter((item) => item.id != id));
    // localStorage.setItem("password", JSON.stringify(passwordArray.filter(item=>item.id != id)))
  };

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  const copyText = (text) => {
    toast("Copied to ClipBoard", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    navigator.clipboard.writeText(text);
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition="Bounce"
      />
      {/* Same as */}
      <ToastContainer />
      <div>
        <div className="absolute inset-0 -z-10 h-full w-full bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div>
        </div>
      </div>
      <div className="p-2 md:p-0 md:mycontainer min-h-[86.5vh]">
        <h1 className="text-4xl font-bold text-center">
          <span className="text-green-500">&lt;</span>
          Pass
          <span className="text-green-500">OP/&gt;</span>
        </h1>
        <p className="text-green-900 text-lg text-center">
          Your own Password Manager
        </p>
        <div className="flex flex-col p-4 text-black gap-8 justify-center items-center">
          <input
            name="site"
            value={form.site}
            onChange={handleChange}
            placeholder="Enter Website URL"
            type="text"
            className="rounded-full border border-green-500 w-full px-4 py-1"
          />
          <div className="flex flex-col md:flex-row w-full justify-between gap-8">
            <input
              name="username"
              value={form.username}
              onChange={handleChange}
              placeholder="Enter Username"
              type="text"
              className="rounded-full border border-green-500 w-full px-4 py-1"
            />
            <div className="relative">
              <input
                name="password"
                ref={passwordRef}
                value={form.password}
                onChange={handleChange}
                placeholder="Enter Password"
                type="password"
                className="rounded-full border border-green-500 w-full px-4 py-1"
              />
              <span
                className="absolute right-[3px] top-[4px] cursor-pointer"
                onClick={showPassword}
              >
                <img ref={ref} className="p-1" width={25} src="eyecross.svg" />
              </span>
            </div>
          </div>
          <button
            onClick={() => savePassword()}
            className="flex justify-center items-center gap-2 bg-green-400 rounded-full px-5 py-2 w-fit hover:bg-green-300 border-green-900"
          >
            <lord-icon
              src="https://cdn.lordicon.com/jgnvfzqg.json"
              trigger="hover"
            ></lord-icon>
            Save
          </button>
          <div className="passwords w-full">
            <h2 className="font-bold text-2xl py-4">Your Passwords</h2>
            {passwordArray.length == 0 && <div>No passwords to show</div>}
            {passwordArray.length != 0 && (
              <table className="table-auto w-full rounded-md overflow-hidden">
                <thead className="bg-green-800">
                  <tr>
                    <th className="py-2">Site</th>
                    <th className="py-2">Username</th>
                    <th className="py-2">Password</th>
                    <th className="py-2">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-green-100">
                  {passwordArray.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td className="text-center border border-white py-2">
                          <div className="flex justify-center items-center gap-3">
                            <a href={item.site} target="_blank">
                              {item.site}
                            </a>
                            <div
                              className="cursor-pointer"
                              onClick={() => {
                                copyText(item.site);
                              }}
                            >
                              <lord-icon
                                src="https://cdn.lordicon.com/uecgmesg.json"
                                trigger="hover"
                              ></lord-icon>
                            </div>
                          </div>
                        </td>
                        <td className="text-center border border-white py-2">
                          {item.username}
                        </td>
                        <td className="text-center border border-white py-2">
                          {item.password}
                        </td>
                        <td className="text-center border border-white py-2">
                          <div className="flex justify-center items-center gap-2">
                            <div
                              className="cursor-pointer"
                              onClick={() => editPassword(item.id)}
                            >
                              <lord-icon
                                src="https://cdn.lordicon.com/depeqmsz.json"
                                trigger="hover"
                              ></lord-icon>
                            </div>
                            <div
                              className="cursor-pointer"
                              onClick={() => deletePassword(item.id)}
                            >
                              <lord-icon
                                src="https://cdn.lordicon.com/skkahier.json"
                                trigger="hover"
                              ></lord-icon>
                            </div>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Manager;
