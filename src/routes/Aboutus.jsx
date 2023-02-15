//import React from "react";
import * as React from 'react';
// import { Image, Stack, Button } from "react-bootstrap";
import { TypeAnimation } from "react-type-animation";
//import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import members from "../members.json";
import ex_members from "../ex_members.json";
import bots from "../bots.json";

const About = () => {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <br></br><br></br><br></br><br></br><br></br><br></br>
      <h1>
        <TypeAnimation className="ta" sequence={["關於我們"]}></TypeAnimation>
      </h1>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <div
        style={{ backgroundColor: "#252426", width: "100%", padding: "100px" }}
      >
        <h2>我們的管理團隊</h2>
        <p>(排名不分先後)</p>
        <Container>
          {Array.from(members.members).map((member) => {
            return (
              <Row>
                <Col md={4}>
                  <Image
                    src={`img/${member.avatar}`}
                    width={100}
                    roundedCircle
                  />
                </Col>
                <Col
                  md={8}
                  style={{
                    textAlign: "left",
                  }}
                >
                  <p>{member.name}</p>
                  <p>{member.description}</p>
                </Col>
              </Row>
              
            );
          })}
        </Container>
      </div>
      <div
        style={{ backgroundColor: "#252426", width: "100%", padding: "100px" }}
      >
        <h2>前管理團隊成員</h2>
        <p>(排名不分先後)</p>
        <Container>
          {Array.from(ex_members.ex_members).map((ex_members) => {
            return (
              <Row>
                <Col md={4}>
                  <Image
                    src={`img/${ex_members.avatar}`}
                    width={100}
                    roundedCircle
                  />
                </Col>
                <Col
                  md={8}
                  style={{
                    textAlign: "left",
                  }}
                >
                  <p>{ex_members.name}</p>
                  <p>{ex_members.description}</p>
                </Col>
              </Row>
              
            );
          })}
        </Container>
      </div>
      <div style={{ marginTop: "100px", width: "90%", padding: "100px" }}>
        <h2>由我們的管理團隊製作的機器人</h2>
        <Container>
          {Array.from(bots.bots).map((bot) => {
            return (
              <a href={bot.link} target="__blank">
                <Row style={{ padding: "20px" }}>
                  <Col md={4}>
                    <Image
                      src={`img/${bot.avatar}`}
                      width={100}
                      roundedCircle
                    />
                  </Col>
                  <Col
                    md={8}
                    style={{
                      textAlign: "left",
                      color: "white",
                      textDecoration: "none",
                    }}
                  >
                    <p>{bot.name}</p>
                    <p>{bot.description}</p>
                  </Col>
                </Row>
              </a>
            );
          })}
        </Container>


        <br></br><br></br>
      <hr className="hr"></hr>
        <footer>
  <div className="container footer">
    <div className="row">
      <div className="col-md-4 text-left">
        <img className="img" src="https://myitblog.tk/pictures/MyIT.png" width={100} />
        <p className="p">
          {"{"}My-IT{"}"}程式討論區
        </p>
        <p>
          {"{"}My-IT{"}"}▸ 一個程式討論群組
        </p>
        <p>果然是我熟悉的myit 還是那麼的不營養</p>
        <p>
          © {"{"}My-IT{"}"}程式討論區 2021-2023
        </p>
      </div>
      <div className="col-md-4 text-right">
        <h4>連結</h4>
        <ul>
          <li>
            <a href="/">主頁</a>
          </li>
          <li>
            <a href="https://discord.gg/myit">加入Discord</a>
          </li>
        </ul>
        <ul>
        <li>
            <a href="/aboutus">關於我們</a>
          </li>
          <li>
            <a href="https://github.com/My-IT-discord/myit_react">Github原代碼</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</footer>
<br></br><br></br>

      </div>
    </div>
   
  
  );
};
export default About;