<?php

namespace App\Http\Controllers;

use App\Transportista;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class TransportistaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //


        $validator = Validator::make($request->json()->all(),
            [
                'persona_id' => ['required', 'int']
            ]
        );
        if ($validator->fails()) {
            return response()->json(["res" => "error", "reason" => "validation", "message" => $validator->messages()]);
        }

        $objTransportista = new Transportista();
        $objTransportista->persona_id = $request->json('persona_id');
        $objTransportista->save();
        return $objTransportista->id;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Transportista  $transportista
     * @return \Illuminate\Http\Response
     */
    public function show(Transportista $transportista)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Transportista  $transportista
     * @return \Illuminate\Http\Response
     */
    public function edit(Transportista $transportista)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Transportista  $transportista
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Transportista $transportista)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Transportista  $transportista
     * @return \Illuminate\Http\Response
     */
    public function destroy(Transportista $transportista)
    {
        //
    }
}
