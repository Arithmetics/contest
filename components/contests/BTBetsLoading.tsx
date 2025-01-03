import React from 'react';
import { Box, keyframes } from '@chakra-ui/react';

const growShrink = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); } /* Grows 10% */
  100% { transform: scale(1); } /* Shrinks back to normal */
`;

const growShrink$ = keyframes`
  0% { transform: scale(1.15); }
  50% { transform: scale(1); } /* Grows 10% */
  100% { transform: scale(1.15); } /* Shrinks back to normal */
`;

const Spinner = (): JSX.Element => {
  return (
    <Box>
      <Box position={'relative'}>
        <Box
          position={'absolute'}
          style={{
            width: '200px',
            height: '200px',
            top: '0px',
            left: '-107px',
          }}
          animation={`${growShrink} 2s ease-in-out infinite`}
        >
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 512 512"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g transform="matrix(1,0,0,1,-1440,0)" fill="none">
              <g transform="matrix(1,0,0,1,-1440.33,0)">
                <rect id="Artboard5" x="2880.33" y="0" width="512" height="512" />
                <g id="Artboard51">
                  <g transform="matrix(1.65517,0,0,1.65517,-5238.84,-11113.5)" fill="#3302ff">
                    <path d="M4993,6918.06L4993,6825.06L5015,6825.06L5015,6895.06L5021,6895.06L5021,6765.06L5043,6765.06L5043,6861.06L5049,6861.06L5049,6753.06L5071,6753.06L5071,6861.06L5077,6861.06L5077,6769.06L5099,6769.06L5099,6861.06L5105,6861.06L5105,6793.06L5127,6793.06L5127,6918.06C5127,6955.04 5096.98,6985.06 5060,6985.06C5023.02,6985.06 4993,6955.04 4993,6918.06Z" />
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </Box>

        <Box
          position={'absolute'}
          style={{
            width: '40px',
            height: '40px',
            top: '115px',
            left: '-25px',
          }}
          animation={`${growShrink$} 2.1s ease-in-out infinite`}
        >
          <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="0 0 180.000000 171.000000"
            preserveAspectRatio="xMidYMid meet"
          >
            <g
              transform="translate(0.000000,171.000000) scale(0.100000,-0.100000)"
              fill="#000000"
              stroke="none"
            >
              <path
                d="M730 1605 l0 -85 -213 0 -213 0 -142 -106 -142 -106 0 -188 0 -188
143 -106 142 -106 218 0 217 0 0 -140 0 -140 -360 0 -360 0 0 -130 0 -130 360
0 360 0 0 -85 0 -85 160 0 160 0 0 85 0 85 218 1 217 0 140 107 140 107 2 185
2 185 -144 108 -145 107 -215 0 -215 0 0 140 0 140 103 0 c57 0 219 3 360 7
l257 6 0 124 0 123 -360 0 -360 0 0 85 0 85 -165 0 -165 0 0 -85z m10 -485 l0
-140 -200 0 -200 0 0 140 0 140 200 0 200 0 0 -140z m720 -540 l0 -140 -200 0
-200 0 0 140 0 140 200 0 200 0 0 -140z"
              />
            </g>
          </svg>
        </Box>
      </Box>
    </Box>
  );
};

export default Spinner;
