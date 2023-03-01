import { useAppDispatch, useAppSelector } from "./redux/app/hooks";
import {
  useState,
  useEffect,
  memo,
  useCallback,
  useMemo,
  Component,
} from "react";
import { deletePost, getPosts, Post } from "./redux/features/posts/postSlice";

/*
export const Test = () => {
    const dispatch = useAppDispatch()
    const { isLoading, posts } = useAppSelector(state => state.posts)
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(a => a + 1);
    }


    useEffect(() => {
        dispatch(getPosts())
    }, [])

    const heavyCalculation = useMemo(() => {
        let x = 0
        for(let i = 0; i < 1_000_000_000; i++){
            x++
        }
        return x
    }, [])


    const handleDelete = useCallback((id: number) => {
        dispatch(deletePost(id))
    }, [])

    if(isLoading) return <>Loading...</>

    return (
        <>
        {heavyCalculation}
        <button onClick={handleClick}>
        You pressed me {count} times
        </button>
        <ul>
            {posts.map((post) => (
            <SinglePost post={post} key={post.id} handleDelete={handleDelete}/>
            ))}
        </ul>
        </>)
}

interface Props{
    post: Post,
    handleDelete: (id: number) => void,
}

const SinglePost = memo(({post, handleDelete}:Props) => {
    return(
        <li>{post.title}
            <button onClick={() => handleDelete(post.id)}> delete </ button>
        </li>
    )
})
*/

type ToggleState = {
  isToggleOn: boolean;
};

type ToggleProps = {};

export class Toggle extends Component<ToggleProps, ToggleState> {
  state = { isToggleOn: true };

  //called after mounting
  componentDidMount() {
    console.log("componentDidMount");
  }
  //called after update
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  handleClick = () => {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  };

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? "ON" : "OFF"}
      </button>
    );
  }
}

interface Props {
  name: string;
  age: number;
}

interface State {
  count: number;
}

export class AdvancedClassComponent extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = (): void => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  render() {
    const { name, age } = this.props;
    const { count } = this.state;
    return (
      <div>
        <div>Name: {name}</div>
        <div>Age: {age}</div>
        <div>Count: {count}</div>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}
