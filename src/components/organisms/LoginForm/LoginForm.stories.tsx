// #region Global Imports
import { Theme } from "@app/contexts/themeContext";
import { Button, Tooltip } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
// #endregion Global Imports

// #region Local Imports
import React from 'react'
import { LoginForm } from '.'
// #endregion Local Imports

export default {
  component: LoginForm,
  title: 'LoginForm',
}

export const Default = () => 
    <div>
      <Button type="primary" shape="circle">
        A
      </Button>
      <Button type="primary" icon={<SearchOutlined />}>
        Search
      </Button>
      <Tooltip title="search">
        <Button shape="circle" icon={<SearchOutlined />} />
      </Tooltip>
      <Button icon={<SearchOutlined />}>Search</Button>
      <br />
      <Tooltip title="search">
        <Button shape="circle" icon={<SearchOutlined />} />
      </Tooltip>
      <Button icon={<SearchOutlined />}>Search</Button>
      <Tooltip title="search">
        <Button type="dashed" shape="circle" icon={<SearchOutlined />} />
      </Tooltip>
      <Button type="dashed" icon={<SearchOutlined />}>
        Search
      </Button>
      <Button icon={<SearchOutlined />} href="https://www.google.com" />
      <br />
      <br />
      <Tooltip title="search">
        <Button type="primary" shape="circle" icon={<SearchOutlined />} size="large" />
      </Tooltip>
      <Button type="primary" shape="circle" size="large">
        A
      </Button>
      <Button type="primary" icon={<SearchOutlined />} size="large">
        Search
      </Button>
      <Tooltip title="search">
        <Button shape="circle" icon={<SearchOutlined />} size="large" />
      </Tooltip>
      <Button icon={<SearchOutlined />} size="large">
        Search
      </Button>
      <br />
      <Tooltip title="search">
        <Button shape="circle" icon={<SearchOutlined />} size="large" />
      </Tooltip>
      <Button icon={<SearchOutlined />} size="large">
        Search
      </Button>
      <Tooltip title="search">
        <Button type="dashed" shape="circle" icon={<SearchOutlined />} size="large" />
      </Tooltip>
      <Button type="dashed" icon={<SearchOutlined />} size="large">
        Search
      </Button>
      <Button icon={<SearchOutlined />} size="large" href="https://www.google.com" />
    </div>