import Button_comp from "../button/Button_comp";
import Icon from "../dynamicIcon/Icon";
import "../home/home_main.scss";
import Model from "../Threedmodel/Model";
import { delay, motion } from "framer-motion";
const Home_main = () => {
  return (
    <>
      <div className="home-parent parent">
        <div className="home-cont cont">
          <div className="left">
            <h1 className="title">
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
              >
                Expand Your World,
              </motion.div>
              <br />
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <span className="gradient-text">Digitally</span>
              </motion.div>
            </h1>

            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <p className="desc">
              At DIwise Global, we're your strategic digital partner, elevating your brand to a global stage. With innovative solutions and a proven track record, we empower businesses to thrive in the digital landscape.
              </p>
            </motion.div>
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <Button_comp btn_text="Go Global Today " />
            </motion.div>
          </div>
          <div className="right">
            <Model/>
            {/* <Icon link="https://prod.spline.design/NYuiCG4g5eRD-H5i/scene.splinecode"/> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home_main;
