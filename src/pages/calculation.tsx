function Calculation(): JSX.Element {
  return (
    <div
      style={{
        height: 'calc(100vh - 250px)',
        margin: '25px',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <div
          style={{
            width: '64px',
            height: '64px',
            position: 'relative',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img
            style={{
              width: '80%',
              height: '80%',
              borderRadius: '50%',
              border: '1px solid black',
              padding: '5%',
            }}
            src="https://cdn-icons-png.flaticon.com/512/4440/4440953.png"
            alt="person"
          />
        </div>
        <div
          style={{
            width: '64px',
            height: '64px',
            position: 'relative',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img
            style={{
              width: '80%',
              height: '80%',
              borderRadius: '50%',
              border: '1px solid black',
              padding: '5%',
            }}
            src="https://cdn-icons-png.flaticon.com/512/10751/10751887.png"
            alt="person"
          />
        </div>
        <div
          style={{
            width: '64px',
            height: '64px',
            position: 'relative',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img
            style={{
              width: '80%',
              height: '80%',
              borderRadius: '50%',
              border: '1px solid black',
              padding: '5%',
            }}
            src="https://cdn-icons-png.flaticon.com/512/3502/3502449.png"
            alt="plus"
          />
        </div>
      </div>
      <div
        style={{
          fontSize: '3rem',
          marginTop: '30px',
        }}
      >
        Title
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '30px',
          fontSize: '2rem',
          margin: '0px 20px 0 20px',
        }}
      >
        <div>총 비용</div>
        <div>₩ 000,000</div>
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          marginTop: '30px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            border: '1px solid black',
            borderRadius: '40px',
            marginBottom: '10px',
          }}
        >
          <div
            style={{
              width: '80px',
              height: '80px',
              position: 'relative',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img
              style={{
                width: '80%',
                height: '80%',
                borderRadius: '50%',
                padding: '5%',
              }}
              src="https://cdn-icons-png.flaticon.com/512/10751/10751887.png"
              alt="person"
            />
          </div>
          <div
            style={{
              display: 'flex',
              textAlign: 'center',
              alignItems: 'center',
              margin: '15px',
              fontSize: '2rem',
            }}
          >
            ₩ 000,000
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            border: '1px solid black',
            borderRadius: '40px',
            marginBottom: '10px',
          }}
        >
          <div
            style={{
              width: '80px',
              height: '80px',
              position: 'relative',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img
              style={{
                width: '80%',
                height: '80%',
                borderRadius: '50%',
                padding: '5%',
              }}
              src="https://cdn-icons-png.flaticon.com/512/4440/4440953.png"
              alt="person"
            />
          </div>
          <div
            style={{
              display: 'flex',
              textAlign: 'center',
              alignItems: 'center',
              margin: '15px',
              fontSize: '2rem',
            }}
          >
            ₩ 000,000
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculation;
