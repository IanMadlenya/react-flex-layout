import React from 'react'
import ReactDOM from 'react-dom'
import {Layout, LayoutSplitter} from '../lib/index.js'
import domready from 'domready'
import LocationBar from 'location-bar'
let locationBar = new LocationBar();

class Horizontal extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <Layout>
      <Layout layoutWidth={100}>Column1</Layout>
      <Layout layoutWidth='flex'>Column2</Layout>
    </Layout>
  }
}

class FixedRightPane extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <Layout>
      <Layout layoutWidth='flex'>Column1</Layout>
      <Layout layoutWidth={100}>Column2</Layout>
    </Layout>
  }
}

class ThreeColumn extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <Layout>
      <Layout layoutWidth={100}>Column1</Layout>
      <Layout layoutWidth='flex'>Column2</Layout>
      <Layout layoutWidth={100}>Column3</Layout>
    </Layout>
  }
}

class HorizontalResizer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <Layout>
      <Layout layoutWidth={100}>Column1</Layout>
      <LayoutSplitter />
      <Layout layoutWidth='flex'>Column2</Layout>
    </Layout>
  }
}

class BothFixedHorizontalResizer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <div style={{border: '1px solid #000', height: 200, width: 313}}>
     <Layout fill='container'>
      <Layout layoutWidth={100}>Column1</Layout>
      <LayoutSplitter />
      <Layout layoutWidth={200}>Column2</Layout>
    </Layout>
    </div>
  }
}

class VerticalResizer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <Layout>
      <Layout layoutHeight={200}>Row1</Layout>
      <LayoutSplitter />
      <Layout layoutHeight='flex'>Row2</Layout>
    </Layout>
  }
}

class TwoColoredRows extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    // Here we highlight the columns so it is easy to see if the outer layout
    // is not being resized.
    return <Layout>
      <Layout layoutHeight={200}>
        <div style={{height: '100%', background: 'cyan'}}>Row 2</div>
      </Layout>
      <Layout layoutHeight='flex'>
        <div style={{height: '100%', background: 'pink'}}>Row 2</div>
      </Layout>
    </Layout>
  }
}

class Nested extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <Layout>
      <Layout layoutWidth={100}>Column1</Layout>
      <LayoutSplitter />
      <Layout layoutWidth='flex'>
        <TwoColoredRows />
      </Layout>
    </Layout>
  }
}

class Example extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    locationBar.route(/horizontal/, () => {
      this.setState({page: <Horizontal />})
    })
    locationBar.route(/fixedright/, () => {
      this.setState({page: <FixedRightPane />})
    })
    locationBar.route(/threecolumn/, () => {
      this.setState({page: <ThreeColumn />})
    })
    locationBar.route(/oneflexhorizontalresize/, () => {
      this.setState({page: <HorizontalResizer />})
    })
    locationBar.route(/bothfixedhorizontalresize/, () => {
      this.setState({page: <BothFixedHorizontalResizer />})
    })
    locationBar.route(/verticalresize/, () => {
      this.setState({page: <VerticalResizer />})
    })
    locationBar.route(/nested/, () => {
      this.setState({page: <Nested />})
    })
    locationBar.start()
  }

  render() {
    var example = this.state.page ? this.state.page : <div>Select an example</div>
    return <Layout fill='window'>
      <Layout layoutHeight={100}>
        <a href='#horizontal'>Horizontal</a> |
        <a href='#fixedright'>Fixed right column</a> |
        <a href='#threecolumn'>Three column</a> |
        <a href='#oneflexhorizontalresize'>Horizontal Splitter</a> |
        <a href='#bothfixedhorizontalresize'>Both fixed Horizontal Splitter</a> |
        <a href='#verticalresize'>Vertical Splitter</a> |
        <a href='#nested'>Nested</a>
      </Layout>
      <Layout layoutHeight='flex'>
        {example}
      </Layout>
    </Layout>
  }
}

domready(() => {
  var container = document.createElement('div')
  document.body.appendChild(container)
  ReactDOM.render(<Example />, container)
})
