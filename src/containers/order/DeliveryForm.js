import { reduxForm } from 'redux-form'
import DeliveryForm from '../../components/order/DeliveryForm'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as orderActions from '../../actions/order'

const mapStateToProps = ({ order }) => ({
  order_id: order.id,
  ready_at: order.ready_at
})

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(orderActions, dispatch),
});

export default reduxForm({
  form: 'DeliveryForm'
})(connect(mapStateToProps, mapDispatchToProps)(DeliveryForm))
