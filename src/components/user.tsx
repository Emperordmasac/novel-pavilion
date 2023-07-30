import React, { FC } from "react";
import {
  Pane,
  Position,
  Popover,
  Menu,
  PersonIcon,
  IconButton,
  LogInIcon,
} from "evergreen-ui";

const User: FC<{}> = () => {
  return (
    <Pane>
      <Popover
        position={Position.BOTTOM_LEFT}
        content={
          <Pane>
            <Pane background="black">
              <Menu>
                <Menu.Item
                  icon={LogInIcon}
                  intent="success"
                  onSelect={() => {}}
                >
                  LOG IN
                </Menu.Item>
              </Menu>
            </Pane>
          </Pane>
        }
      >
        <Pane
          elevation={3}
          background="black"
          borderRadius="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <IconButton
            icon={PersonIcon}
            size="large"
            borderRadius="50px"
            outline="none"
          />
        </Pane>
      </Popover>
    </Pane>
  );
};

export default User;
