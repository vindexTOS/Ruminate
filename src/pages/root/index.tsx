import React from 'react'
import { Outlet } from 'react-router-dom'
import Layout from '../layout'
import Content from '../../components/content/indext'
const Root = () => {
  return (
    <Layout>
      {/* <Outlet /> */}

      <div className="flex flex-col  relative    w-[100%] h-[100%]">
        <Content style="vector1" border="vector1-border">
          <div className="flex flex-col items-center justify-center h-[90%]  ">
            vector1
          </div>
        </Content>
        <Content style="vector2" border="vector2-border  ">
          <div>VEctor2</div>
        </Content>
        <Content style="vector2" border="vector2-border  ">
          <div>VEctor2</div>
        </Content>
        <Content style="vector3" border=" vector3-border ">
          <div>VEctor3</div>
        </Content>
        <Content style="vector4" border="vector4-border   ">
          <div>VEctor4</div>
        </Content>
        <Content style="vector5" border="vector5-border ">
          <div>VEctor5</div>
        </Content>
      </div>
    </Layout>
  )
}

export default Root
