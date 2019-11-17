# Modal

To use modal you should:

- Import modal actions & react-redux at start of your component file:
```js
import { connect } from 'react-redux';
import { dispatchModalOpen, dipatchModalClose } from '../../../store/modal/actions'; // Here will be relative to your component path.
```
- Then you should wrap your component with a `connect` & create `mapDispatchToProps` object/function:
```js
const mapStateToProps = (state) => ({
  // some your case.
});
const mapDispatchToProps = {
  openYourComponentModal: (/* inject */) => dispatchModalOpen('your-component' /*, inject */), /* first argument is what component you will use, second argument is object with props that you want to inject to your modal component */ 
  // ...other actions
};

const YourComponentConnected = connect(mapStateToProps, mapDispatchToProps)(YourComponent);

export {
  YourComponentConnected as YourComponent,
};
```

- After this moves you will have in component props `this.props.openLoginModal`.
- Now you can use it in your component:
```js
class YourComponent extends Component {
  // ... your methods

  render() {
    return (
      <div onClick={() => this.props.openYourComponentModal()}>Some stuff to render</div>
    );
  } 
}
```
-  To use your component in `Modal` just add it in `switch/case` construction at `../src/components/Modal/Modal.js` in `getChild` method:
```js
  const getChild = () => {
    switch (props.child) {
      case 'your-component':
        return (<YourComponent {...props.inject}/>); // Don't forget to spread into your component inject object.   
      // ... other cases.
    }
  };
``` 