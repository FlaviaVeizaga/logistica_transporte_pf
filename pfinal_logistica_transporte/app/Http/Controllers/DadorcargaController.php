<?php

namespace App\Http\Controllers;

use App\Dadorcarga;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class DadorcargaController extends Controller
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
     * @param \Illuminate\Http\Request $request
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

        $objDadorCarga = new Dadorcarga();
        $objDadorCarga->persona_id = $request->json('persona_id');
        $objDadorCarga->save();

        return response()->json(["res" => "Dador de cargar insertado correctamente", "persona_id" => $objDadorCarga->id]);
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Dadorcarga $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param \App\Dadorcarga $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Dadorcarga $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Dadorcarga $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
