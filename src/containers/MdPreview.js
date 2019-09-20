import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { updateInput } from '../store/actions/';
import './MdPreview.css';

class MdPreview extends Component {
  componentDidMount() {
    // this.props.updateInput()
    console.log('hello');
  }

  render() {
    const { input } = this.props.input;
    // const {upateInput} = this.props;
    // console.log(this.props)
    // console.log(input)
    // console.log(updateInput)

    return (
      <>
        <Container fluid>
          <Row>
            <Col md={6} lg={5}>
              {/* <input value={input} onChange={e => this.props.updateInput(e)} /> */}
              <h2>Editor</h2>
              <hr />
              <textarea
                id="editor"
                value={input}
                onChange={e => this.props.updateInput(e)}
              ></textarea>
              {/* <p>{input}</p> */}
            </Col>
            <Col md={6} lg={7}>
              <h2>Preview</h2>
              <hr />
              <div className="text-left">
                <ReactMarkdown source={input} id="preview" />
              </div>
            </Col>
          </Row>
          {/* <p>hello</p> */}
        </Container>
      </>
    );
  }
}

const mapStateToProps = ({ input }) => ({
  input,
});

const mapDispatchToProps = dispatch => ({
  updateInput: event => dispatch(updateInput(event)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MdPreview);
