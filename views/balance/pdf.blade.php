<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossorigin="anonymous"
    />
    <style>
      .tr-custom {
        border: 1px solid #000 !important;
      }

      .td-custom {
        border: 1px solid #000 !important;
      }

      .table-custom {
        border: 1px solid #000 !important;
      }
      .footer {
        left: 0;
        bottom: 0%;
        width: 100%;
        color: #000;
        text-align: right;
      }

      @media print {
        .tr-custom {
          border: 1px solid #000 !important;
        }

        .td-custom {
          border: 1px solid #000 !important;
        }

        .table-custom {
          border: 1px solid #000 !important;
        }
      }
    </style>
  </head>

  <body>
    {{-- {{dd($balance)}} --}}
    <div class="container">
      <div class="text-center">
        <h4 class="py-2 text-uppercase font-weight-bold">Payment Receipt</h4>
      </div>
      <div
        class="container position-relative"
        style="border:1px solid #000; min-height: 580px; "
      >
        <div class="text-center pt-2 pb-4">
          <h6 class=" font-weight-bold pt-1 mb-0">{{$balance->invoice->customer->customer_name}}</h6>
          <p class="mb-0">{{$balance->invoice->customer->billing_address}}</p>
          <p class="mb-0">{{$balance->invoice->customer->customer_phone}}</p>
        </div>
        <div class="row">
          <div
            class="col-md-12 font-weight-bold mb-2"
            style="border-bottom: 1px solid #000"
          ></div>
        </div>
        <div class="row"> 
          <div class="col-md-10 mx-auto">
            <div class="row flex-nowrap">
              <div class="col-md-6">
                <table class="table table-borderless">
                  <tbody>
                    <tr>
                      <td class="text-left">Receipt No</td>
                      <td class="text-center">:</td>
                      <td class="text-left font-weight-bold">{{$balance->receipt_no}}</td>
                    </tr>
                    <tr>
                      <td class="text-left">Received From</td>
                      <td class="text-center">:</td>
                      <td class="text-left font-weight-bold">OJA HARDWARE</td>
                    </tr>
                    <tr>
                      <td class="text-left">Payment Mode</td>
                      <td class="text-center">:</td>
                      <td class="text-left font-weight-bold">CASH</td>
                    </tr> 
                    <tr>
                      <td class="text-left">Date</td>
                      <td class="text-center">:</td>
                      <td class="text-left font-weight-bold">{{$balance->created_at->format('d-m-Y')}}</td>
                    </tr>
                  </tbody>
                </table>
              </div> 
            </div>
          </div>
        </div>

        <div class="row">
          <div
            class="col-md-12 font-weight-bold "
            style="border-bottom: 1px solid #000"
          ></div>
        </div>

        <div class="row">
          <div class="col-md-7 mx-auto">
            <h6 class="font-weight-bold text-center py-2">
              Invoice Payment Breakup
            </h6>
          </div>
        </div>

        <div class="row">
          <div class="col-md-10 mx-auto">
            <table class="table  table-custom">
              <tbody>
                <tr class="tr-custom">
                  <td class="td-custom py-0">Invoice No</td>
                  <td class="td-custom py-0">Total Amt</td>
                  <td class="td-custom py-0">Paid Amt</td>
                  <td class="td-custom py-0">Due Amt</td>
                </tr>
                <tr class="tr-custom">
                  <td class="td-custom ">{{$balance->invoice->invoice_no}}</td>
                  <td class="td-custom ">{{$balance->invoice->total_rounded_amount_payable}}</td>
                  <td class="td-custom ">{{$balance->amount_paid}}</td>
                  <td class="td-custom ">{{$balance->balance_left}}</td>
                </tr>

                <tr class="border-0">
                  <td colspan="3" class="text-right border-0">
                    Total Paid Amount:
                  </td>
                  <td class="border-0">{{$balance->amount_paid}}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="row">
          <div class="col-md-10 mx-auto">
            <p>
              Paid amount in words:
              <span class="font-weight-bold">{{title_case((new \App\Currency())->getIndianCurrency($balance->amount_paid))}} Rupees Only</span>
            </p>
          </div>
        </div>
        <div class="row" style="margin-top:80px;">
          <div class="col-md-10 mx-auto">
            <p class="text-right">Authorised Signatory</p>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>
{{-- {{dd($balance)}} --}}
