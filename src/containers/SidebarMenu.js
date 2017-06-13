import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Route, Link } from 'react-router-dom'
import { Icon, Menu, Sidebar } from 'semantic-ui-react'
import Logo from '../components/Logo/index'
import routes from '../routes'
import { toggleSidebar } from '../actions/ui/sidebar'

const SidebarMenu = ({ isMobile, isSidebarOpen, toggleSidebar }) => (
  <Sidebar
    as={Menu}
    animation="push"
    width="thin"
    color="blue"
    vertical
    visible={isSidebarOpen || !isMobile}
    icon="labeled"
  >
    <Logo />
    {routes.map(route => (
      <Route
        key={route.path}
        exact={route.exact}
        path={route.path}
        children={({ match }) => (
          <Menu.Item
            as={Link}
            to={route.path}
            active={!!match}
            onClick={toggleSidebar}
          >
            <Icon name={route.icon} />{route.label}
          </Menu.Item>
        )}
      />
    ))}
  </Sidebar>
)

SidebarMenu.propTypes = {
  isMobile: PropTypes.bool,
  isSidebarOpen: PropTypes.bool,
  toggleSidebar: PropTypes.func
}

const mapStateToProps = state => ({
  isMobile: state.ui.isMobile,
  isSidebarOpen: state.ui.isSidebarOpen
})

export default connect(mapStateToProps, { toggleSidebar })(SidebarMenu)