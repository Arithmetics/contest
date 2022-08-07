import { Flex } from '@chakra-ui/react';

const PayToast = (): JSX.Element => {
  const goToVenmo = (): void => {
    window.open('https://account.venmo.com/u/BrockTillotson');
  };

  const goToPayPal = (): void => {
    window.open('https://paypal.me/brocktillotson');
  };

  return (
    <Flex marginTop={5}>
      <button
        onClick={goToPayPal}
        style={{
          padding: '15px 30px',
          border: '1px solid #FF9933',
          borderRadius: '5px',
          backgroundImage: 'linear-gradient(#FFF0A8, #F9B421)',
          margin: '0 auto',
          display: 'block',
          width: '117px',
          position: 'relative',
          height: '55px',
          marginRight: '10px',
        }}
      >
        <span
          style={{
            fontWeight: 'bold',
            fontSize: '15px',
          }}
        >
          <i style={{ color: '#253b80' }}>Pay</i>
          <i style={{ color: '#179bd7' }}>Pal</i>
        </span>
      </button>
      <div style={{ height: '55px', width: '100px' }}>
        <input
          onClick={goToVenmo}
          style={{
            height: '100%',
          }}
          type="image"
          id="venmo-button"
          aria-label="venmo"
          src="https://pbs.twimg.com/profile_images/1330956198456147968/INnnHQyY_400x400.png"
        />
      </div>
    </Flex>
  );
};

export default PayToast;
