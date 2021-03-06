import { FunctionComponent } from "react";
import { useTheme } from "../../packages/theme";
import { Button, ElementGroup } from "../../packages/theme/components";
import Popover from "../../packages/theme/components/Popover";
import TextField from "../../packages/theme/components/TextField";

const Example: FunctionComponent = () => {
  const theme = useTheme();

  const buttonClicked = (text: string) => {
    alert(`${text} button clicked`);
  };

  return (
    <div style={{ marginTop: theme.spaces[2], width: 800, margin: "0 auto" }}>
      <h2>Inputs</h2>
      <h3>Intents</h3>
      <p>
        <TextField label="Default" placeholder="Default input" />
      </p>
      <p>
        <TextField
          label="Success"
          placeholder="Success input"
          intent="success"
        />
      </p>
      <p>
        <TextField label="Error" placeholder="Error input" intent="error" />
      </p>
      <p>
        <TextField label="Disabled" placeholder="Disabled input" disabled />
      </p>
      <h3>Sizes</h3>
      <p>
        <TextField label="Small" placeholder="Small input" size="small" />
      </p>
      <p>
        <TextField label="Medium" placeholder="Medium input" size="medium" />
      </p>
      <p>
        <TextField label="Large" placeholder="Large input" size="large" />
      </p>

      <h2>Buttons</h2>
      <h3>Intents</h3>
      <ElementGroup>
        <Button
          text="Default"
          onClick={(e) => buttonClicked(e.currentTarget.innerHTML)}
        />
        <Button
          text="Primary"
          intent={"primary"}
          onClick={(e) => buttonClicked(e.currentTarget.innerHTML)}
        />
        <Button
          text="Warning"
          intent={"warning"}
          onClick={(e) => buttonClicked(e.currentTarget.innerHTML)}
        />
        <Button
          text="Error"
          intent={"error"}
          onClick={(e) => buttonClicked(e.currentTarget.innerHTML)}
        />
      </ElementGroup>

      <h3>Sizes</h3>
      <ElementGroup>
        <Button
          text="Small"
          size={"small"}
          onClick={(e) => buttonClicked(e.currentTarget.innerHTML)}
        />
        <Button
          text="Medium"
          size={"medium"}
          onClick={(e) => buttonClicked(e.currentTarget.innerHTML)}
        />
        <Button
          text="Large"
          size={"large"}
          onClick={(e) => buttonClicked(e.currentTarget.innerHTML)}
        />
      </ElementGroup>

      <h3>Popover</h3>
      <ElementGroup>
        <Popover trigger="click" component={<Button text="Click me" />}>
          <span>Xin ch??o</span>
          {` `}
          <a href="https://google.com" target="_blank" rel="noreferrer">
            Google
          </a>
        </Popover>

        <Popover trigger="hover" component={<Button text="Hover me" />}>
          <span>Xin ch??o</span>
          {` `}
          <a href="https://youtube.com" target="_blank" rel="noreferrer">
            YouTube
          </a>
        </Popover>
      </ElementGroup>
    </div>
  );
};

export default Example;
