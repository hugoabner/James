import logos from '../../assets/logo.jpg'; 

const Logo = () => {
	return (
		<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
		<img 
			src={logos} 
			alt="Logo" 
			style={{ width: '40px', height: '40px', borderRadius: '50%' }} 	
		/>
		</div>
	);
}
export default Logo