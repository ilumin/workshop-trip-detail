import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 20px;
  background: yellow;
  font-size: 16px;

  .card {
    position: relative;
    background: #ffffff;
    border-radius: 1em;

    .header {
      position: relative;
      height: 100px;

      .header-content {
        position: absolute;
        width: 100%;
        height: 100%;
        background: #DDD;

        .location {
          position: absolute;
          bottom: 1em;
          left: 1em;

          margin: 0;
          font-size: 1em;
        }
        .route-status {
          position: absolute;
          bottom: 1em;
          right: 1em;
          
          font-size: 1em;
        }
        .day-counter {
          position: absolute;
          top: 1em;
          left: 1em;
          
          font-size: 1em;
        }
      }

      .header-bg {}

      .button-join {
        position: absolute;
        bottom: -17px;
        left: 50%;
        box-sizing: border-box;
        width: 100px;
        height: 34px;

        margin-left: -50px;

        text-align: center;
        background: yellow;
        padding: .5em;
        border-radius: 1em;
      }
    }

    .body {
      padding: 1em;

      .next-trip {
        margin: 1em 0;
      }
      .content {}

      ul {
        padding: 0;
        margin: 0;
        list-style: none;

        li {
          display: inline;
        }
      }

      .like-profiles {}
      .tools {
        border-top: solid 1px #ccc;
        padding-top: .5em;
        margin-top: .5em;
        height: 30px;

        .tool {
          float: left;
          width: 30px;
          height: 30px;
          background: #000;
          margin: 0 4px;
        }

        .tool-save {
          float: right;
        }
      }
    }
  }
`

export default Wrapper