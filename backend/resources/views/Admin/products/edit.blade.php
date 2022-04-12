<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Edit Product') }}
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="relative table-responsive overflow-x-auto shadow-md sm:rounded-lg">
                    <form class="forms-sample" method="POST" action="{{ route('admin.products.update' , $product->id) }}">
                        @csrf
                        @method('PUT')
                        <div class="shadow sm:rounded-md sm:overflow-hidden">
                            <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                                <div class="grid grid-cols-3 gap-6 py-3">
                                    <div class="col-span-3 sm:col-span-2">
                                        <label for="attributes" class="block text-sm font-medium text-gray-700"> Attributes </label>
                                        <div class="mt-1 flex rounded-md shadow-sm">
                                            <input type="text" name="attributes" id="attributes" value="{{ $product->attributes }}" class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="Attributes">
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <label for="details" class="block text-sm font-medium text-gray-700"> Details </label>
                                    <div class="mt-1">
                                        <textarea id="details" name="details" rows="3" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder="Details">{{ $product->details }}</textarea>
                                    </div>
                                </div>

                                <div class="px-4 py-3 bg-gray-500 text-right sm:px-6">
                                    <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-red bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Save</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</x-app-layout>
