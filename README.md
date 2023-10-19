# mediusware-react-task
### 1. project install problem?
=> nvm-setup.exe install.
=> Sometimes you need to install an older NodeJS version for a particular project. To install the old node js version or downgrade the node js version without uninstalling the latest version. So I installed the unlimited node js version on the same computer. I just need to switch to my preferred version.
All processes are done with the help of NVM (Node Version Management Tool).

### 2. Problem-1
You will see two input fields (Name, and Status), click Submit as shown in the Name and Status form table.
  By clicking active it will only show the data that has the status active.
  By clicking completed it will only show the data that has the status completed.
  Clicking all it will show all the data and sort them by given order.
  -Active take will show first
  -Completed will show after active tasks
  -All other status ( pending, archive, etc) will show after.

### 3. Problem-2

The main screen should have two buttons ( All contact and US contact).
Clicking on All contact should open a Modal A, and clicking on US contact should open a Modal B.

Both modals should have three buttons:
1. Modal button A -labeled 'All contacts' switching to modal A.
2. Modal button B -labeled 'US contacts' switching to modal B.
3. Modal button c -labeled 'Close' closing the modal.
4. Modal footer checkbox -labeled 'Only even' when checked, only contacts with even ID( ex, 2, 4, 6...) should be displayed.

=> Modals A and B should have a search box to filter contacts ( use API param). Contacts should be filtered while typing in a search input( with a small delay) and immediately on hitting the enter key.

=> The list of contacts should display only the first page (API param, page=1) after scrolling to the bottom of the load next page(infinity scroll).
Infinite Scroll With API Call In React JS using react-infinite-scroll-component.
