import logo from './logo.svg';
import './App.css';
import { PowerBIEmbed } from 'powerbi-client-react';
import {models} from 'powerbi-client';


function App() {
  return (
   <div className='App-header'>
     <PowerBIEmbed
	embedConfig = {{
		type: 'report',   // Supported types: report, dashboard, tile, visual and qna
		id: 'efbd4a38-0fdf-4501-bea5-6fff107745c6',
		embedUrl: 'https://app.powerbi.com/reportEmbed?reportId=efbd4a38-0fdf-4501-bea5-6fff107745c6&groupId=83e6a441-261a-4a3c-854b-bd438105d154&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVdFU1QtRVVST1BFLUUtUFJJTUFSWS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsibW9kZXJuRW1iZWQiOnRydWUsImNlcnRpZmllZFRlbGVtZXRyeUVtYmVkIjp0cnVlLCJ1c2FnZU1ldHJpY3NWTmV4dCI6dHJ1ZX19',
		accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Im5PbzNaRHJPRFhFSzFqS1doWHNsSFJfS1hFZyIsImtpZCI6Im5PbzNaRHJPRFhFSzFqS1doWHNsSFJfS1hFZyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvYTI2NmQ4NDYtNWRjMC00YjhjLTliNWItMzI3YWJjODM2OTcyLyIsImlhdCI6MTYyNDQ0NzcxMCwibmJmIjoxNjI0NDQ3NzEwLCJleHAiOjE2MjQ0NTE2MTAsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVlFBcS84VEFBQUFaRmxEbHVtQ083bTVFRytOQm5vTjVFZjdpNDZQZzFtWW9pdFJiYkMzNG5kalpsODB5NmRGMzlWTVlXai82OFFqd3YvWEtNc0wrRzBvTHpPTEc0eU5sWEZQNytBUjdZYWNZakVTR0ZFQXgrcz0iLCJhbXIiOlsicHdkIiwibWZhIl0sImFwcGlkIjoiODcxYzAxMGYtNWU2MS00ZmIxLTgzYWMtOTg2MTBhN2U5MTEwIiwiYXBwaWRhY3IiOiIyIiwiZmFtaWx5X25hbWUiOiJBaG1lZCIsImdpdmVuX25hbWUiOiJBcmlmIiwiaXBhZGRyIjoiMjAyLjQ3LjQyLjE2NCIsIm5hbWUiOiJBcmlmIEFobWVkIiwib2lkIjoiNjMwOWNmMWYtMzg3NC00YzA5LTkzNmEtZDg3YTMzYWM2MThhIiwicHVpZCI6IjEwMDMyMDAxNTU4QUI1QjciLCJyaCI6IjAuQVlFQVJ0aG1vc0JkakV1Yld6SjZ2SU5wY2c4QkhJZGhYckZQZzZ5WVlRcC1rUkNCQUhBLiIsInNjcCI6InVzZXJfaW1wZXJzb25hdGlvbiIsInN1YiI6ImtxaGl4OFpfbzBIcS1JcGdrNkMxZ252NHZVRV9uOFBTYk1MeWhISjhQdWMiLCJ0aWQiOiJhMjY2ZDg0Ni01ZGMwLTRiOGMtOWI1Yi0zMjdhYmM4MzY5NzIiLCJ1bmlxdWVfbmFtZSI6IkFyaWZAb3B0aW1pemVhbmFseXRpY3Mub25taWNyb3NvZnQuY29tIiwidXBuIjoiQXJpZkBvcHRpbWl6ZWFuYWx5dGljcy5vbm1pY3Jvc29mdC5jb20iLCJ1dGkiOiJxdUwwYks4d3hrV2VWZTJiX2JKN0FRIiwidmVyIjoiMS4wIiwid2lkcyI6WyI2MmU5MDM5NC02OWY1LTQyMzctOTE5MC0wMTIxNzcxNDVlMTAiLCJiNzlmYmY0ZC0zZWY5LTQ2ODktODE0My03NmIxOTRlODU1MDkiXX0.MsDpfkFPDto3iY3h6Wx8XwmMIs1qCJUQhikVVCZKUDYhrr6kM0HSgsV6H_LBupGdUZW8fwYBgKJO-HrWT5QOlK6oamVfqcaEUITVEmdSxXDa49A2Jo5GVqq1CUFdt3e6yxUfcvpOWRaOFOkzVxpOSne3x1cr8U-XH2jzoIYMnMHFodH9LuJhjuf4EhBlAURGZDA3-Pic2qUsZmQmzmhD21YqJ1Bzw1vn4euZdqDV0I3K_6NAnpR0LkNDE25-Fi-iwoafB6CVUVS2gElnvco-bEJG53B4j14ytP9rSSt02k41u6MytbUosG-ISBJ5S4xp81ZWXqOZTfwb-9rF-zMBkQ',
		tokenType: models.TokenType.Aad,
		settings: {
			panes: {
				filters: {
					expanded: false,
					visible: true
				}
			},
		}
	}}

	eventHandlers = { 
		new Map([
			['loaded', function () {console.log('Report loaded');}],
			['rendered', function () {console.log('Report rendered');}],
			['error', function (event) {console.log(event.detail);}]
		])
	}
		
	cssClassName = { "Embed-container" }

	getEmbeddedComponent = { (embeddedReport) => {
		window.report = embeddedReport;
	}}
/>
   </div>
  );
}

export default App;
