import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { withRouter } from "react-router-dom";
import "./index.less";

/**
 *
 * @param {way} props
 * @description 用于页面路由跳转 通过way指定跳转方式，指定way=refade
 * 则反向
 *
 */

const ANIMATION_MAP = {
  PUSH: "fade",
  POP: "refade",
};

const AnimationRoute = ({ children, location, history }) => {
  // history.action 根据动作自行判断前进和后退
  return (
    <TransitionGroup
      className={'router-container'}
      childFactory={child => React.cloneElement(
        child,
        {
          classNames: ANIMATION_MAP[history.action]
          // classNames: {
          //   enter: 'animated',
          //   enterActive: 'bounceIn route-enter',
          //   exit: 'animated',
          //   exitActive: 'fadeOut route-exit',
          // }
        }
      )}
    >
      <CSSTransition
        timeout={500}
        key={location.pathname}
      >
        {children}
      </CSSTransition>
    </TransitionGroup>
  );
}

export default withRouter(AnimationRoute);
