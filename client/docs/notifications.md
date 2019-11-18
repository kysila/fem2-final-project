# Notifications

To use notifications you should:

- Import notification actions & react-redux at start of your component file:
```js
import { connect } from 'react-redux';
import { enqueueSnackbar } from '../../store/notification/actions';  // Here will be relative to your component path.
```
- Then you should wrap your component with a `connect` & create `mapDispatchToProps` object/function:
```js
const mapStateToProps = (state) => ({
  // some your case.
});
const mapDispatchToProps = (dispatch) => ({
  notify: (message, variant = "default") => dispatch(enqueueSnackbar({ 
    message, // Text for your notification
    options: { 
      variant // [info, warning, error, success, default] variant sets a color for your notification.
    }
  })),
  // ...other actions
});

const YourComponentConnected = connect(mapStateToProps, mapDispatchToProps)(YourComponent);

export {
  YourComponentConnected as YourComponent,
};
```

- After this moves you will have in component props `this.props.notify`.
- Now you can use it in components:
```js
class YourComponent extends Component {
  componentDidMount() {
    // After rendering component notification will appear.
    this.props.notify('This is text of notification', 'info');
  }
 
  render() {
    return (
      <div>Some stuff to render</div>
    );
  } 
}
```