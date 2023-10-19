import Layout from '@/components/layout/layout'
import Notification from '@/components/ui/notification'
import { NotificationContextProvider } from '@/store/notification-context'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <NotificationContextProvider>
      <Layout>
        <Component {...pageProps} />
        <Notification title="Test" message="This is a test" status="success"/>
      </Layout>
    </NotificationContextProvider>
  )
}
