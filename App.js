import { Globalstyles } from "./Globalstyles";
import {
  Div,
  Input,
  Button,
  S,
  In,
  Exit,
  Aside,
  I,
  Cash,
  Lashes,
  Load,
} from "./elemetns";
import { useState, useRef, useEffect } from "react";
import "./App.css";
import emailjs from "@emailjs/browser";

function App() {
  const [input, setinput] = useState("");
  const form = useRef();
  const [load,setLoad] = useState(false)

  const [turn, setturn] = useState(false);
  const [wrong, setwrong] = useState(false);
  const [ok, setok] = useState(false);
  const ref = useRef(null);

  const sendEmail = () => {
    setLoad(true)
    emailjs
      .sendForm(
        "service_gl30h56",
        "template_zac6bya",
        form.current,
        "75QuuxQ7yuUhMoMD1"
      )
      .then(
        (result) => {
          setLoad(false)
          setok(true);
          localStorage.setItem("newnew", "true");
        },
        (error) => {
          setLoad(false)
          console.log(error.text);
        }
      );
  };

  useEffect(() => {
    if (localStorage.getItem("newnew")) {
      setok(true);
    }
  }, []);

  const set = (event) => {
    setinput(event.target.value);
  };
  const click = () => {
    if (input.toLowerCase() === "eyebrows") {
      setturn(true);
      setwrong(false);
      ref.current.value = "";
    } else {
      setwrong(true);
    }
  };
  return (
    <>
      <Globalstyles />
      <Div>
        <Aside turn={turn}>
        <Load load={load}>
          Loading...
        </Load>
          <I>
            <p className="p">Congratulations! </p>
            {!ok && <p className="p">Tap to get your cash</p>}
            <form
              ref={form}
              style={{ display: "none" }}
              onSubmit={sendEmail}
            ></form>
            {!ok && (
              <Cash
                onClick={(event) => {
                  sendEmail();
                  event.stopPropagation();
                }}
              ></Cash>
            )}

            {ok && <Lashes />}

            <br />

            <p className="p1">from...</p>
            <p className="p1">Gerald Edge</p>
          </I>
        </Aside>
        <Exit
          turn={turn}
          onClick={() => {
            setturn(false);
          }}
        />

        <In>
          <S>
            <Input
              wrong={wrong}
              ref={ref}
              type="password"
              placeholder="password"
              onChange={(e) => {
                set(e);
              }}
            ></Input>
            <Button className="p" onClick={click}>
              Enter
            </Button>
          </S>
          <p className="p">Hint: Favorite part of you Gerald Edge adores</p>
        </In>
      </Div>
    </>
  );
}

export default App;
