import React from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { Col, Container, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { GrSwift } from "react-icons/gr";
import { IoLogoAndroid } from "react-icons/io";
import { FaApplePay,
  FaMicrosoft,
  FaLinux,
  FaAppStore,
  FaPhp,
  FaCloud,
  FaAws,
  FaGithub,
  FaGitlab,
  FaJenkins,
  FaDocker,
  FaDrawPolygon,
  FaBootstrap,
  FaCss3,
  FaHtml5,
  FaGooglePay,
  FaPaypal,
  FaStripe,
  FaBluetooth,
 } from "react-icons/fa";
import { RiFlutterFill } from "react-icons/ri";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiPostgresql,
  SiKotlin,
  SiMacos,
  SiKalilinux,
  SiDart,
  SiTypescript,
  SiSqlite,
  SiGerrit,
  SiFastlane,
  SiCircleci,
  SiBamboo,
  SiGithubactions,
  SiKubernetes,
  SiAdobexd,
  SiNotion,
  SiSketch,
  SiTerraform,
  SiApachekafka,
  SiGrafana,
  SiPytorch,
  SiDatabricks,
  SiArgo,
  SiElastic,
  SiFoodpanda,
  SiNumpy,
  SiTensorflow,
  SiRay,
  SiPlotly,
  SiScipy,
  SiGraphql,
  SiMqtt,
  SiXmpp,
  SiIbeacon,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { VscAzure } from "react-icons/vsc";
import { DiMysql,
  DiBitbucket,
 } from "react-icons/di";
 import { FiFigma } from "react-icons/fi";
 import { TbApi } from "react-icons/tb";
 import { MdOutlineSip,
  MdGpsFixed
  } from "react-icons/md";


function Techstack() {
  return (
    <Container>
      <br></br>
      <h4 className="project-heading">
        <strong className="purple">Operating System </strong>
      </h4>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <OverlayTrigger placement="top" overlay={<Tooltip id="macos-tooltip">macOS</Tooltip>}>
            <span><SiMacos /></span>
          </OverlayTrigger>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <OverlayTrigger placement="top" overlay={<Tooltip id="windows-tooltip">Windows</Tooltip>}>
            <span><FaMicrosoft /></span>
          </OverlayTrigger>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <OverlayTrigger placement="top" overlay={<Tooltip id="linux-tooltip">Linux</Tooltip>}>
            <span><FaLinux /></span>
          </OverlayTrigger>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <OverlayTrigger placement="top" overlay={<Tooltip id="kalilinux-tooltip">Kali Linux</Tooltip>}>
            <span><SiKalilinux /></span>
          </OverlayTrigger>
        </Col>
      </Row>
      
      <h4 className="project-heading">
        <strong className="purple">Mobile Development </strong>
      </h4>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col xs={4} md={2} className="tech-icons">
            <OverlayTrigger placement="top" overlay={<Tooltip id="appstore-tooltip">App Store</Tooltip>}>
              <span><FaAppStore /></span>
            </OverlayTrigger>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <OverlayTrigger placement="top" overlay={<Tooltip id="playstore-tooltip">Google Play Store</Tooltip>}>
              <span><IoLogoGooglePlaystore /></span>
            </OverlayTrigger>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <OverlayTrigger placement="top" overlay={<Tooltip id="android-tooltip">Android</Tooltip>}>
              <span><IoLogoAndroid /></span>
            </OverlayTrigger>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <OverlayTrigger placement="top" overlay={<Tooltip id="flutter-tooltip">Flutter</Tooltip>}>
              <span><RiFlutterFill /></span>
            </OverlayTrigger>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <OverlayTrigger placement="top" overlay={<Tooltip id="react-tooltip">React Native</Tooltip>}>
              <span><DiReact /></span>
            </OverlayTrigger>
          </Col>
        </Row>

      <h4 className="project-heading">
          <strong className="purple">Programming Languages </strong>
      </h4>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col xs={4} md={2} className="tech-icons">
            <OverlayTrigger placement="top" overlay={<Tooltip id="swift-tooltip">Swift</Tooltip>}>
              <span><GrSwift /></span>
            </OverlayTrigger>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <OverlayTrigger placement="top" overlay={<Tooltip id="kotlin-tooltip">Kotlin</Tooltip>}>
              <span><SiKotlin /></span>
            </OverlayTrigger>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <OverlayTrigger placement="top" overlay={<Tooltip id="java-tooltip">Java</Tooltip>}>
              <span><DiJava /></span>
            </OverlayTrigger>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <OverlayTrigger placement="top" overlay={<Tooltip id="nodejs-tooltip">Node.js</Tooltip>}>
              <span><DiNodejs /></span>
            </OverlayTrigger>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <OverlayTrigger placement="top" overlay={<Tooltip id="javascript-tooltip">JavaScript</Tooltip>}>
              <span><DiJavascript1 /></span>
            </OverlayTrigger>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <OverlayTrigger placement="top" overlay={<Tooltip id="typescript-tooltip">TypeScript</Tooltip>}>
              <span><SiTypescript /></span>
            </OverlayTrigger>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <OverlayTrigger placement="top" overlay={<Tooltip id="nextjs-tooltip">Next.js</Tooltip>}>
              <span><SiNextdotjs /></span>
            </OverlayTrigger>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <OverlayTrigger placement="top" overlay={<Tooltip id="cplusplus-tooltip">C++</Tooltip>}>
              <span><CgCPlusPlus /></span>
            </OverlayTrigger>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <OverlayTrigger placement="top" overlay={<Tooltip id="golang-tooltip">Go (Golang)</Tooltip>}>
              <span><TbBrandGolang /></span>
            </OverlayTrigger>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <OverlayTrigger placement="top" overlay={<Tooltip id="php-tooltip">PHP</Tooltip>}>
              <span><FaPhp /></span>
            </OverlayTrigger>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <OverlayTrigger placement="top" overlay={<Tooltip id="python-tooltip">Python</Tooltip>}>
              <span><DiPython /></span>
            </OverlayTrigger>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <OverlayTrigger placement="top" overlay={<Tooltip id="dart-tooltip">Dart</Tooltip>}>
              <span><SiDart /></span>
            </OverlayTrigger>
          </Col>
        </Row>

      <h4 className="project-heading">
        <strong className="purple">Cloud & DataBase </strong>
      </h4>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col xs={4} md={2} className="tech-icons">
            <OverlayTrigger placement="top" overlay={<Tooltip id="cloud-tooltip">Cloud</Tooltip>}>
              <span><FaCloud /></span>
            </OverlayTrigger>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <OverlayTrigger placement="top" overlay={<Tooltip id="aws-tooltip">AWS</Tooltip>}>
              <span><FaAws /></span>
            </OverlayTrigger>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <OverlayTrigger placement="top" overlay={<Tooltip id="azure-tooltip">Azure</Tooltip>}>
              <span><VscAzure /></span>
            </OverlayTrigger>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <OverlayTrigger placement="top" overlay={<Tooltip id="mongodb-tooltip">MongoDB</Tooltip>}>
              <span><DiMongodb /></span>
            </OverlayTrigger>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <OverlayTrigger placement="top" overlay={<Tooltip id="postgresql-tooltip">PostgreSQL</Tooltip>}>
              <span><SiPostgresql /></span>
            </OverlayTrigger>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <OverlayTrigger placement="top" overlay={<Tooltip id="mysql-tooltip">MySQL</Tooltip>}>
              <span><DiMysql /></span>
            </OverlayTrigger>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <OverlayTrigger placement="top" overlay={<Tooltip id="sqlite-tooltip">SQLite</Tooltip>}>
              <span><SiSqlite /></span>
            </OverlayTrigger>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <OverlayTrigger placement="top" overlay={<Tooltip id="firebase-tooltip">Firebase</Tooltip>}>
              <span><SiFirebase /></span>
            </OverlayTrigger>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <OverlayTrigger placement="top" overlay={<Tooltip id="redis-tooltip">Redis</Tooltip>}>
              <span><SiRedis /></span>
            </OverlayTrigger>
          </Col>
        </Row>

      <h4 className="project-heading">
        <strong className="purple">UI/UX Design </strong>
      </h4>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col xs={4} md={2} className="tech-icons">
            <OverlayTrigger placement="top" overlay={<Tooltip id="figma-tooltip">Figma</Tooltip>}>
              <span><FiFigma /></span>
            </OverlayTrigger>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <OverlayTrigger placement="top" overlay={<Tooltip id="adobexd-tooltip">Adobe XD</Tooltip>}>
              <span><SiAdobexd /></span>
            </OverlayTrigger>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <OverlayTrigger placement="top" overlay={<Tooltip id="notion-tooltip">Notion</Tooltip>}>
              <span><SiNotion /></span>
            </OverlayTrigger>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <OverlayTrigger placement="top" overlay={<Tooltip id="sketch-tooltip">Sketch</Tooltip>}>
              <span><SiSketch /></span>
            </OverlayTrigger>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <OverlayTrigger placement="top" overlay={<Tooltip id="drawpolygon-tooltip">Draw Polygon</Tooltip>}>
              <span><FaDrawPolygon /></span>
            </OverlayTrigger>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <OverlayTrigger placement="top" overlay={<Tooltip id="bootstrap-tooltip">Bootstrap</Tooltip>}>
              <span><FaBootstrap /></span>
            </OverlayTrigger>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <OverlayTrigger placement="top" overlay={<Tooltip id="css3-tooltip">CSS3</Tooltip>}>
              <span><FaCss3 /></span>
            </OverlayTrigger>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <OverlayTrigger placement="top" overlay={<Tooltip id="html5-tooltip">HTML5</Tooltip>}>
              <span><FaHtml5 /></span>
            </OverlayTrigger>
          </Col>
        </Row>

      <h4 className="project-heading">
        <strong className="purple">DevOps </strong>
      </h4>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col xs={4} md={2} className="tech-icons">
            <OverlayTrigger placement="top" overlay={<Tooltip id="git-tooltip">Git</Tooltip>}>
              <span><DiGit /></span>
            </OverlayTrigger>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <OverlayTrigger placement="top" overlay={<Tooltip id="github-tooltip">GitHub</Tooltip>}>
              <span><FaGithub /></span>
            </OverlayTrigger>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <OverlayTrigger placement="top" overlay={<Tooltip id="bitbucket-tooltip">Bitbucket</Tooltip>}>
              <span><DiBitbucket /></span>
            </OverlayTrigger>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <OverlayTrigger placement="top" overlay={<Tooltip id="gitlab-tooltip">GitLab</Tooltip>}>
              <span><FaGitlab /></span>
            </OverlayTrigger>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <OverlayTrigger placement="top" overlay={<Tooltip id="gerrit-tooltip">Gerrit</Tooltip>}>
              <span><SiGerrit /></span>
            </OverlayTrigger>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <OverlayTrigger placement="top" overlay={<Tooltip id="jenkins-tooltip">Jenkins</Tooltip>}>
              <span><FaJenkins /></span>
            </OverlayTrigger>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <OverlayTrigger placement="top" overlay={<Tooltip id="fastlane-tooltip">Fastlane</Tooltip>}>
              <span><SiFastlane /></span>
            </OverlayTrigger>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <OverlayTrigger placement="top" overlay={<Tooltip id="circleci-tooltip">CircleCI</Tooltip>}>
              <span><SiCircleci /></span>
            </OverlayTrigger>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <OverlayTrigger placement="top" overlay={<Tooltip id="bamboo-tooltip">Bamboo</Tooltip>}>
              <span><SiBamboo /></span>
            </OverlayTrigger>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <OverlayTrigger placement="top" overlay={<Tooltip id="githubactions-tooltip">GitHub Actions</Tooltip>}>
              <span><SiGithubactions /></span>
            </OverlayTrigger>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <OverlayTrigger placement="top" overlay={<Tooltip id="docker-tooltip">Docker</Tooltip>}>
              <span><FaDocker /></span>
            </OverlayTrigger>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <OverlayTrigger placement="top" overlay={<Tooltip id="kubernetes-tooltip">Kubernetes</Tooltip>}>
              <span><SiKubernetes /></span>
            </OverlayTrigger>
          </Col>
        </Row>

      <h4 className="project-heading">
        <strong className="purple">Other Frameworks & Library & Extra </strong>
      </h4>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col xs={4} md={2} className="tech-icons">
            <OverlayTrigger placement="top" overlay={<Tooltip id="terraform-tooltip">Terraform</Tooltip>}>
              <span><SiTerraform /></span>
            </OverlayTrigger>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <OverlayTrigger placement="top" overlay={<Tooltip id="apachekafka-tooltip">Apache Kafka</Tooltip>}>
              <span><SiApachekafka /></span>
            </OverlayTrigger>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <OverlayTrigger placement="top" overlay={<Tooltip id="grafana-tooltip">Grafana</Tooltip>}>
              <span><SiGrafana /></span>
            </OverlayTrigger>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <OverlayTrigger placement="top" overlay={<Tooltip id="pytorch-tooltip">PyTorch</Tooltip>}>
              <span><SiPytorch /></span>
            </OverlayTrigger>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <OverlayTrigger placement="top" overlay={<Tooltip id="databricks-tooltip">Databricks</Tooltip>}>
              <span><SiDatabricks /></span>
            </OverlayTrigger>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <OverlayTrigger placement="top" overlay={<Tooltip id="argo-tooltip">Argo</Tooltip>}>
              <span><SiArgo /></span>
            </OverlayTrigger>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <OverlayTrigger placement="top" overlay={<Tooltip id="elastic-tooltip">Elastic</Tooltip>}>
              <span><SiElastic /></span>
            </OverlayTrigger>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <OverlayTrigger placement="top" overlay={<Tooltip id="foodpanda-tooltip">Foodpanda</Tooltip>}>
              <span><SiFoodpanda /></span>
            </OverlayTrigger>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <OverlayTrigger placement="top" overlay={<Tooltip id="numpy-tooltip">NumPy</Tooltip>}>
              <span><SiNumpy /></span>
            </OverlayTrigger>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <OverlayTrigger placement="top" overlay={<Tooltip id="tensorflow-tooltip">TensorFlow</Tooltip>}>
              <span><SiTensorflow /></span>
            </OverlayTrigger>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <OverlayTrigger placement="top" overlay={<Tooltip id="ray-tooltip">Ray</Tooltip>}>
              <span><SiRay /></span>
            </OverlayTrigger>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <OverlayTrigger placement="top" overlay={<Tooltip id="plotly-tooltip">Plotly</Tooltip>}>
              <span><SiPlotly /></span>
            </OverlayTrigger>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <OverlayTrigger placement="top" overlay={<Tooltip id="scipy-tooltip">SciPy</Tooltip>}>
              <span><SiScipy /></span>
            </OverlayTrigger>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <OverlayTrigger placement="top" overlay={<Tooltip id="graphql-tooltip">GraphQL</Tooltip>}>
              <span><SiGraphql /></span>
            </OverlayTrigger>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <OverlayTrigger placement="top" overlay={<Tooltip id="api-tooltip">API</Tooltip>}>
              <span><TbApi /></span>
            </OverlayTrigger>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <OverlayTrigger placement="top" overlay={<Tooltip id="applepay-tooltip">Apple Pay</Tooltip>}>
              <span><FaApplePay /></span>
            </OverlayTrigger>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <OverlayTrigger placement="top" overlay={<Tooltip id="googlepay-tooltip">Google Pay</Tooltip>}>
              <span><FaGooglePay /></span>
            </OverlayTrigger>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <OverlayTrigger placement="top" overlay={<Tooltip id="paypal-tooltip">PayPal</Tooltip>}>
              <span><FaPaypal /></span>
            </OverlayTrigger>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <OverlayTrigger placement="top" overlay={<Tooltip id="stripe-tooltip">Stripe</Tooltip>}>
              <span><FaStripe /></span>
            </OverlayTrigger>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <OverlayTrigger placement="top" overlay={<Tooltip id="mqtt-tooltip">MQTT</Tooltip>}>
              <span><SiMqtt /></span>
            </OverlayTrigger>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <OverlayTrigger placement="top" overlay={<Tooltip id="xmpp-tooltip">XMPP</Tooltip>}>
              <span><SiXmpp /></span>
            </OverlayTrigger>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <OverlayTrigger placement="top" overlay={<Tooltip id="sip-tooltip">SIP</Tooltip>}>
              <span><MdOutlineSip /></span>
            </OverlayTrigger>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <OverlayTrigger placement="top" overlay={<Tooltip id="bluetooth-tooltip">Bluetooth</Tooltip>}>
              <span><FaBluetooth /></span>
            </OverlayTrigger>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <OverlayTrigger placement="top" overlay={<Tooltip id="gps-tooltip">GPS</Tooltip>}>
              <span><MdGpsFixed /></span>
            </OverlayTrigger>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <OverlayTrigger placement="top" overlay={<Tooltip id="ibeacon-tooltip">iBeacon</Tooltip>}>
              <span><SiIbeacon /></span>
            </OverlayTrigger>
          </Col>
        </Row>

    </Container>
  );
}

export default Techstack;
